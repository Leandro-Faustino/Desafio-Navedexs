import { injectable, inject } from 'tsyringe';

import AppError from '@shared/infra/http/error/AppError';
import INaversRepositoryFilter from '../infra/repositories/INaversRepositoryFilter';

interface Request {
  id: string;
  user_id: string;
}

@injectable()
export default class DeleteNaverServices {
  constructor(
    @inject('NaversRepository2')
    private naversRepository2: INaversRepositoryFilter,
  ) {}

  public async execute({ id, user_id }: Request): Promise<void> {
    const project = await this.naversRepository2.findOneNaver({ id });

    if (!project) {
      throw new AppError('Nave not found.');
    }

    if (project.user_id !== user_id) {
      throw new AppError('This nave does not belong to you.');
    }

    await this.naversRepository2.delete({ id });
  }
}

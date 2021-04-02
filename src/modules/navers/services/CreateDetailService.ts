import { injectable, inject } from 'tsyringe';

import Navers from '@modules/navers/infra/typeorm/entities/Navers';

import AppError from '@shared/infra/http/error/AppError';
import INaversRepository from '@modules/navers/infra/repositories/INaversRepository';

@injectable()
export default class CreateDetailService {
  constructor(
    @inject('NaversRepository')
    private naversRepository: INaversRepository,
  ) {}

  public async execute(data: any): Promise<Navers | undefined> {
    const naver = await this.naversRepository.findOneNaver(data);

    if (!naver) {
      throw new AppError('Nave not exist.');
    }

    return naver;
  }
}

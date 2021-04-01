import { injectable, inject } from 'tsyringe';

import Navers from '@modules/navers/infra/typeorm/entities/Navers';

import AppError from '@shared/infra/http/error/AppError';
import INaversRepositoryFilter from '../infra/repositories/INaversRepositoryFilter';
import { INaversNoExistDTO } from '../dtos/INaversNoExistDTO';

@injectable()
export default class CreateDetailService {
  constructor(
    @inject('NaversRepository2')
    private naversRepository2: INaversRepositoryFilter,
  ) {}

  public async execute(data: INaversNoExistDTO): Promise<Navers | undefined> {
    const naver = await this.naversRepository2.findOneNaver(data);

    if (!naver) {
      throw new AppError('Nave not exist.');
    }

    return naver;
  }
}

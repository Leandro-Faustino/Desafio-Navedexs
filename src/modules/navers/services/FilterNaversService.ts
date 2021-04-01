import AppError from '@shared/infra/http/error/AppError';
import { injectable, inject } from 'tsyringe';
import { getRepository } from 'typeorm';
import { INaversNoExistDTO } from '../dtos/INaversNoExistDTO';
import INaversRepository from '../infra/repositories/INaversRepository';
import INaversRepositoryFilter from '../infra/repositories/INaversRepositoryFilter';
import Navers from '../infra/typeorm/entities/Navers';

@injectable()
class FilterNaversService {
  constructor(
    @inject('NaversRepository2')
    private naversRepository2: INaversRepositoryFilter,
  ) {}

  public async execute(data: INaversNoExistDTO): Promise<Navers[] | undefined> {
    const naver = await this.naversRepository2.index(data);

    return naver;
  }
}
export default FilterNaversService;

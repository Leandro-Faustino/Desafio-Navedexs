import AppError from '@shared/infra/http/error/AppError';
import { injectable, inject } from 'tsyringe';
import { IFindNaversDTO, INaversDTO } from '../dtos/INaversDTO';
import INaversRepository from '../infra/repositories/INaversRepository';
import Navers from '../infra/typeorm/entities/Navers';

@injectable()
class FilterNaversService {
  constructor(
    @inject('NaversRepository')
    private naversRepository: INaversRepository,
  ) {}

  public async execute(data: any): Promise<Navers[] | undefined> {
    const naver = await this.naversRepository.index(data);

    return naver;
  }
}
export default FilterNaversService;

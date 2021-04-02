import AppError from '@shared/infra/http/error/AppError';
import { injectable, inject } from 'tsyringe';
import { INaversDTO } from '../dtos/INaversDTO';
import INaversRepository from '../infra/repositories/INaversRepository';
import Navers from '../infra/typeorm/entities/Navers';

@injectable()
class CreateNaversService {
  constructor(
    @inject('NaversRepository')
    private naversRepository: INaversRepository,
  ) {}

  public async execute({
    name,
    user_id,
    birthDate,
    admission_date,
    job_role,
    projects,
  }: INaversDTO): Promise<Navers> {
    // fazer verificaçao se usuario existe db
    const IfExistNaver = await this.naversRepository.findNaver({
      where: { name, user_id },
    });

    if (IfExistNaver) {
      throw new AppError('naver already created');
    }
    // criaçao do meu usuario pelo repositorioUser
    const naver = await this.naversRepository.create({
      name,
      user_id,
      birthDate,
      admission_date,
      job_role,
      projects,
    });

    return naver;
  }
}
export default CreateNaversService;

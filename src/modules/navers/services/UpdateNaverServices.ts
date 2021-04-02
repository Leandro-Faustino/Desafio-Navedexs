import { injectable, inject } from 'tsyringe';

import Navers from '@modules/navers/infra/typeorm/entities/Navers';

import AppError from '@shared/infra/http/error/AppError';
import INaversRepository from '@modules/navers/infra/repositories/INaversRepository';

interface Request {
  id: string;
  name: string;
  birthDate: Date;
  admission_date: Date;
  job_role: string;
  user_id: string;
  projects: any;
}

@injectable()
export default class UpdateNaverServices {
  constructor(
    @inject('NaversRepository')
    private naversRepository: INaversRepository,
  ) {}

  public async execute({
    id,
    name,
    birthDate,
    admission_date,
    job_role,
    user_id,
    projects,
  }: Request): Promise<Navers> {
    const existNaverID = await this.naversRepository.findNaver({
      where: { id },
    });

    if (!existNaverID?.name) {
      throw new AppError('Naver not found');
    }

    if (existNaverID?.user_id !== user_id) {
      throw new AppError('This naver does not belong to you');
    }

    existNaverID.name = name;
    existNaverID.birthDate = birthDate;
    existNaverID.admission_date = admission_date;
    existNaverID.job_role = job_role;
    existNaverID.user_id = user_id;
    existNaverID.projects = projects;

    return this.naversRepository.update(existNaverID);
  }
}

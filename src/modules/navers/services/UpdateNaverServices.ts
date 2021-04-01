import { injectable, inject } from 'tsyringe';

import INaverRepository from '@modules/navers/infra/repositories/INaversRepository';

import Navers from '@modules/navers/infra/typeorm/entities/Navers';

import AppError from '@shared/infra/http/error/AppError';
import { getRepository } from 'typeorm';
import INaversRepositoryFilter from '../infra/repositories/INaversRepositoryFilter';

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
    @inject('NaverRepository')
    private naverRepository: INaverRepository,

    @inject('NaversRepository2')
    private naversRepository2: INaversRepositoryFilter,
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
    const existNaverID = await this.naversRepository2.findNaver({ id });

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

    return this.naverRepository.update(existNaverID);
  }
}

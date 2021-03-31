import { getConnection, getRepository, Repository } from 'typeorm';
import { INaversDTO } from '@modules/navers/dtos/INaversDTO';
import Navers from '../entities/Navers';
import INaversRepository from '../../repositories/INaversRepository';

class NaversRepository implements INaversRepository {
  private ormRepository: Repository<Navers>; // cria typo repositorio

  constructor() {
    this.ormRepository = getRepository(Navers); // cria o repositorio
  }

  public async create({
    name,
    birthDate,
    admission_date,
    job_role,
    projects,
    user_id,
  }: INaversDTO): Promise<Navers> {
    const end = await this.ormRepository
      .createQueryBuilder()
      .loadAllRelationIds({ relations: ['projects'] })
      .getMany();

    console.log(end);
    const naver = this.ormRepository.create({
      name,
      birthDate,
      admission_date,
      job_role,
      projects: end,
      user_id,
    });
    await this.ormRepository.save(naver);

    return naver;
  }

  public async save(navers: Navers): Promise<Navers> {
    return this.ormRepository.save(navers);
  }

  public async index(data: any): Promise<Navers[] | undefined> {
    const allNavers = this.ormRepository.find(data);

    return allNavers;
  }
}
export default NaversRepository;

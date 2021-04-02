import { Connection, getRepository, Repository } from 'typeorm';
import { IFindNaversDTO, INaversDTO } from '@modules/navers/dtos/INaversDTO';
import INaversRepository from '@modules/navers/infra/repositories/INaversRepository';
import Navers from '@modules/navers/infra/typeorm/entities/Navers';

class NaversRepository implements INaversRepository {
  private ormRepository: Repository<Navers>; // cria typo repositorio

  constructor() {
    this.ormRepository = getRepository(Navers);
  }

  public async findNaver(data: IFindNaversDTO): Promise<Navers | undefined> {
    const navers = await this.ormRepository.findOne(data);

    return navers;
  }

  public async create({
    user_id,
    name,
    birthDate,
    admission_date,
    job_role,
    projects,
  }: INaversDTO): Promise<Navers> {
    const naver = this.ormRepository.create({
      user_id,
      name,
      birthDate,
      admission_date,
      job_role,
      projects,
    });
    await this.ormRepository.save(naver);

    return naver;
  }

  public async findOneNaver(data: any): Promise<Navers | undefined> {
    const oneNaver = await this.ormRepository.findOne(data);

    return oneNaver;
  }

  public async save(navers: Navers): Promise<Navers> {
    return this.ormRepository.save(navers);
  }

  public async index(data: any): Promise<Navers[] | undefined> {
    const allNavers = await this.ormRepository.find(data);

    return allNavers;
  }

  public async update(naver: any): Promise<Navers> {
    return this.ormRepository.save(naver);
  }

  public async delete(id: any): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
export default NaversRepository;

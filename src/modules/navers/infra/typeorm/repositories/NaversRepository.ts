import { Connection, getRepository, Repository } from 'typeorm';
import { INaversDTO } from '@modules/navers/dtos/INaversDTO';
import INaversRepository from '@modules/navers/infra/repositories/INaversRepository';
import Navers from '@modules/navers/infra/typeorm/entities/Navers';
import { INaversNoExistDTO } from '@modules/navers/dtos/INaversNoExistDTO';
import INaversRepositoryFilter from '../../repositories/INaversRepositoryFilter';

class NaversRepository implements INaversRepository, INaversRepositoryFilter {
  private ormRepository: Repository<Navers>; // cria typo repositorio

  constructor() {
    this.ormRepository = getRepository(Navers);
  }

  public async searchNaver(
    data: INaversNoExistDTO,
  ): Promise<Navers | undefined> {
    const naver = this.ormRepository.findOne(data);

    return naver;
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

  public async findOneNaver(
    data: INaversNoExistDTO,
  ): Promise<Navers | undefined> {
    const oneNaver = this.ormRepository.findOne(data);

    return oneNaver;
  }

  public async findNaver(data: INaversNoExistDTO): Promise<Navers | undefined> {
    const naver = this.ormRepository.findOne(data);

    return naver;
  }

  public async save(navers: Navers): Promise<Navers> {
    return this.ormRepository.save(navers);
  }

  public async index(data: any): Promise<Navers[] | undefined> {
    const allNavers = this.ormRepository.find(data);

    return allNavers;
  }

  public async update(naver: any): Promise<Navers> {
    return this.ormRepository.save(naver);
  }

  public async delete(id: INaversNoExistDTO): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
export default NaversRepository;

import { getRepository, Repository } from 'typeorm';
import IProjectsDTO from '../../../dtos/IProjectsDTO';
import IProjectsRepository from '../../repositories/IProjectsRepository';
import Projects from '../entities/Projects';

class ProjectsRepository implements IProjectsRepository {
  private ormRepository: Repository<Projects>; // cria typo repositorio

  constructor() {
    this.ormRepository = getRepository(Projects); // cria o repositorio
  }

  public async create({ user_id, name }: IProjectsDTO): Promise<Projects> {
    const project = this.ormRepository.create({
      user_id,
      name,
    });
    await this.ormRepository.save(project);

    return project;
  }

  public async save(projects: IProjectsDTO): Promise<Projects> {
    return this.ormRepository.save(projects);
  }
}

export default ProjectsRepository;

import { getRepository, Repository } from 'typeorm';
import IProjectsDTO, { IFindProject } from '../../../dtos/IProjectsDTO';
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

  public async findAllProject(data: any): Promise<Projects[] | undefined> {
    const allProject = this.ormRepository.find(data);

    return allProject;
  }

  public async findOneProject(data: any): Promise<Projects | undefined> {
    const oneProject = this.ormRepository.findOne(data);

    return oneProject;
  }

  public async findProject(data: IFindProject): Promise<Projects | undefined> {
    const oneProject = this.ormRepository.findOne(data);

    return oneProject;
  }

  public async update(project: IProjectsDTO): Promise<Projects> {
    return this.ormRepository.save(project);
  }

  public async save(projects: IProjectsDTO): Promise<Projects> {
    return this.ormRepository.save(projects);
  }

  public async delete(id: string): Promise<void> {
    this.ormRepository.delete(id);
  }
}

export default ProjectsRepository;

import Projects from '@modules/projects/infra/typeorm/entities/Projects';
import IProjectsDTO from '@modules/projects/dtos/IProjectsDTO';

export default interface INaversRepository {
  create(data: IProjectsDTO): Promise<Projects>;
  save(projects: IProjectsDTO): Promise<Projects>;
}

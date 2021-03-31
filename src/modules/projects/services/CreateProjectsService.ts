// import Users from '@modules/users/infra/typeorm/entities/Users';
// import AppError from '@shared/infra/http/error/AppError';
import AppError from '@shared/infra/http/error/AppError';
import { injectable, inject } from 'tsyringe';
import IProjectsRepository from '../infra/repositories/IProjectsRepository';
import Projects from '../infra/typeorm/entities/Projects';

interface Response {
  name: string;
  user_id: string;
  navers: any;
}
@injectable()
class CreateProjectsService {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  public async execute({ name, user_id, navers }: Response): Promise<Projects> {
    // fazer verificaçao se usuario existe db

    const project = await this.projectsRepository.create({
      name,
      user_id,
      navers,
    });

    return project;
  }
}
export default CreateProjectsService;

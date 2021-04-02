import { injectable, inject } from 'tsyringe';

import IProjectsRepository from '@modules/projects/infra/repositories/IProjectsRepository';

import AppError from '@shared/infra/http/error/AppError';

interface Request {
  id: string;
  user_id: string;
}

@injectable()
export default class DeleteProjectServices {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  public async execute({ id, user_id }: Request): Promise<void> {
    const project = await this.projectsRepository.findProject({
      where: { id },
    });

    if (!project) {
      throw new AppError('Project not found.');
    }

    if (project.user_id !== user_id) {
      throw new AppError('This project does not belong to you.');
    }

    await this.projectsRepository.delete(id);
  }
}

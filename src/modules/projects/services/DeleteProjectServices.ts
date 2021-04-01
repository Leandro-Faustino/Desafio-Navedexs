import { injectable, inject } from 'tsyringe';

import IProjectRepository from '@modules/projects/infra/repositories/IProjectsRepository';

import AppError from '@shared/infra/http/error/AppError';

interface Request {
  id: string;
  user_id: string;
}

@injectable()
export default class DeleteProjectServices {
  constructor(
    @inject('ProjectRepository')
    private projectRepository: IProjectRepository,
  ) {}

  public async execute({ id, user_id }: Request): Promise<void> {
    const project = await this.projectRepository.findProject({
      where: { id },
    });

    if (!project) {
      throw new AppError('Project not found.');
    }

    if (project.user_id !== user_id) {
      throw new AppError('This project does not belong to you.');
    }

    await this.projectRepository.delete(id);
  }
}

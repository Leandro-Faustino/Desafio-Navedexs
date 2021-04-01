import { injectable, inject } from 'tsyringe';

import IProjectRepository from '@modules/projects/infra/repositories/IProjectsRepository';

import Project from '@modules/projects/infra/typeorm/entities/Projects';

import AppError from '@shared/infra/http/error/AppError';

@injectable()
export default class DetailProjectServices {
  constructor(
    @inject('ProjectRepository')
    private projectRepository: IProjectRepository,
  ) {}

  public async execute(data: any): Promise<Project | undefined> {
    const project = await this.projectRepository.findOneProject(data);

    if (!project) {
      throw new AppError('Project not exist.');
    }

    return project;
  }
}

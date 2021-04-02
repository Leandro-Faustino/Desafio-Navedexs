import { injectable, inject } from 'tsyringe';

import IProjectsRepository from '@modules/projects/infra/repositories/IProjectsRepository';

import Project from '@modules/projects/infra/typeorm/entities/Projects';

import AppError from '@shared/infra/http/error/AppError';

@injectable()
export default class DetailProjectServices {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  public async execute(data: any): Promise<Project | undefined> {
    const project = await this.projectsRepository.findOneProject(data);

    if (!project) {
      throw new AppError('Project not exist.');
    }

    return project;
  }
}

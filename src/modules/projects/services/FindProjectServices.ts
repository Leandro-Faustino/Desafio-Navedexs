import { injectable, inject } from 'tsyringe';

import IProjectRepository from '@modules/projects/infra/repositories/IProjectsRepository';

import Project from '@modules/projects/infra/typeorm/entities/Projects';

@injectable()
export default class FindProjectServices {
  constructor(
    @inject('ProjectRepository')
    private projectRepository: IProjectRepository,
  ) {}

  public async execute(data: any): Promise<Project[] | undefined> {
    const project = await this.projectRepository.findAllProject(data);

    return project;
  }
}

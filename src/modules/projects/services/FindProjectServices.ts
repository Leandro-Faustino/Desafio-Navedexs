import { injectable, inject } from 'tsyringe';

import IProjectsRepository from '@modules/projects/infra/repositories/IProjectsRepository';

import Project from '@modules/projects/infra/typeorm/entities/Projects';

@injectable()
export default class FindProjectServices {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  public async execute(data: any): Promise<Project[] | undefined> {
    const project = await this.projectsRepository.findAllProject(data);

    return project;
  }
}

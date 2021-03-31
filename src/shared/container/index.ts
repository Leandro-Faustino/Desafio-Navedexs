import { container } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import INaversRepository from '@modules/navers/infra/repositories/INaversRepository';
import NaversRepository from '@modules/navers/infra/typeorm/repositories/NaversRepository';
import IProjectsRepository from '@modules/projects/infra/repositories/IProjectsRepository';
import ProjectsRepository from '@modules/projects/infra/typeorm/repositories/ProjectsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<INaversRepository>(
  'NaversRepository',
  NaversRepository,
);

container.registerSingleton<IProjectsRepository>(
  'ProjectsRepository',
  ProjectsRepository,
);

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProjectsService from '@modules/projects/services/CreateProjectsService';
import FindProjectServices from '@modules/projects/services/FindProjectServices';
import DetailProjectServices from '@modules/projects/services/DetailProjectServices';
import UpdateProjectServices from '@modules/projects/services/UpdateProjectServices';
import DeleteProjectServices from '@modules/projects/services/DeleteProjectServices';

export default class ProjectsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name } = request.body;

    const createProjects = container.resolve(CreateProjectsService); // instancio repository quando chamo serviço
    const projects = await createProjects.execute({
      user_id,
      name,
    });

    return response.json(projects);
  }

  // metodo index
  public async index(request: Request, response: Response): Promise<Response> {
    const data = { ...request.query, user_id: request.user.id };

    const findProjects = container.resolve(FindProjectServices);

    const project = await findProjects.execute(data);

    return response.json(project);
  }

  // metodo show
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const data = {
      where: { id },
      relations: ['navers'],
    };

    const findOneProjects = container.resolve(DetailProjectServices);

    const project = await findOneProjects.execute(data);

    return response.json(project);
  }

  // metodo update
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, navers } = request.body;
    const user_id = request.user.id;

    const findProjects = container.resolve(UpdateProjectServices);

    const project = await findProjects.execute({ id, name, user_id, navers });

    return response.json(project);
  }

  // metodo delete
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user_id = request.user.id;

    const findProjects = container.resolve(DeleteProjectServices);

    await findProjects.execute({ id, user_id });

    return response.json({
      message: `Project deleted .`,
    });
  }
}

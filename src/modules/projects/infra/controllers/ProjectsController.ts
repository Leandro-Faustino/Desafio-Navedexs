import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProjectsService from '@modules/projects/services/CreateProjectsService';

export default class ProjectsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name, navers } = request.body;

    const createProjects = container.resolve(CreateProjectsService); // instancio repository quando chamo serviço
    const projects = await createProjects.execute({
      user_id,
      name,
      navers,
    });

    return response.json(projects);
  }
}

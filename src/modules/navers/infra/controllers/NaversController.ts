import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateNaversService from '@modules/navers/services/CreateNaversService';
import { parseISO, format } from 'date-fns';
import FilterNaversService from '@modules/navers/services/FilterNaversService';
import { getRepository } from 'typeorm';
import Navers from '../typeorm/entities/Navers';

export default class NaversController {
  public async create(request: Request, response: Response): Promise<Response> {
    const users_id = request.user.id;
    const {
      name,
      birthDate,
      admission_date,
      job_role,
      projects,
    } = request.body;

    const birthDateparsed = parseISO(birthDate);
    const admissionParsed = parseISO(admission_date);

    const createUser = container.resolve(CreateNaversService); // instancio repository quando chamo serviço
    const navers = await createUser.execute({
      name,
      users_id,
      birthDate: birthDateparsed,
      admission_date: admissionParsed,
      job_role,
      projects,
    });
    console.log(navers);
    return response.json(navers);
  }

  // metodos index....
  public async index(request: Request, response: Response): Promise<Response> {
    const data = { ...request.query, users_id: request.user.id };

    const naversFilter = container.resolve(FilterNaversService); // instancio repository quando chamo serviço
    const projectsNavers = await naversFilter.execute(data);

    return response.json(projectsNavers);
  }
}

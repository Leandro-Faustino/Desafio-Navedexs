import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateNaversService from '@modules/navers/services/CreateNaversService';
import { parseISO, format } from 'date-fns';
import FilterNaversService from '@modules/navers/services/FilterNaversService';
import CreateDetailService from '@modules/navers/services/CreateDetailService';
import UpdateNaverServices from '@modules/navers/services/UpdateNaverServices';
import DeleteNaverServices from '@modules/navers/services/DeleteNaverServices';

export default class NaversController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
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
      user_id,
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
    const data = { ...request.query, user_id: request.user.id };

    const naversFilter = container.resolve(FilterNaversService); // instancio repository quando chamo serviço
    const projectsNavers = await naversFilter.execute(data);

    return response.json(projectsNavers);
  }

  // metodo show
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const data = {
      id,
      relations: ['projects'],
    };

    const naversDetails = container.resolve(CreateDetailService);
    const navers = await naversDetails.execute(data);

    return response.json(navers);
  }

  // metodo update
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user_id = request.user.id;

    const {
      name,
      birthDate,
      admission_date,
      job_role,
      projects,
    } = request.body;

    const updateNaver = container.resolve(UpdateNaverServices);

    const navers = await updateNaver.execute({
      id,
      name,
      birthDate,
      admission_date,
      job_role,
      user_id,
      projects,
    });

    return response.json(navers);
  }

  // metodo delete
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user_id = request.user.id;

    const deleteNaver = container.resolve(DeleteNaverServices);

    await deleteNaver.execute({ id, user_id });

    return response.json({
      message: `Naver deletado com sucesso.`,
    });
  }
}

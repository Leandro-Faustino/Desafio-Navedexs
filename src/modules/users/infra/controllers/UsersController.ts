import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserServices from '@modules/users/services/CreateUserServices';
import { classToClass } from 'class-transformer';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createUser = container.resolve(CreateUserServices); // instancio repository quando chamo serviço
    const user = await createUser.execute({
      email,
      password,
    });

    return response.json({ user: classToClass(user) });
  }
}

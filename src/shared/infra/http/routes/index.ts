import naversRouter from '@modules/navers/infra/http/routes/navers.routes';
import projectsRouter from '@modules/projects/infra/http/routes/projects.routes';
import loginRouter from '@modules/users/infra/http/routes/login.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';

import { Router } from 'express';

const routes = Router();
routes.use('/users', usersRouter);
routes.use('/login', loginRouter);
routes.use('/navers', naversRouter);
routes.use('/projects', projectsRouter);
export default routes;

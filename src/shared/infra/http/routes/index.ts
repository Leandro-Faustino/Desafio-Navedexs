import loginRouter from '@modules/users/infra/http/routes/login.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';

import { Router } from 'express';

const routes = Router();
routes.use('/users', usersRouter);
routes.use('/login', loginRouter);

export default routes;

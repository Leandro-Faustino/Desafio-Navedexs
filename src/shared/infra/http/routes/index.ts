// src/routes/index.ts
/* import { Router } from 'express';

const routes = Router();

export default routes; */

import usersRouter from '@modules/users/infra/http/routes/users.routes';

import { Router } from 'express';

const routes = Router();
routes.use('/users', usersRouter);

export default routes;

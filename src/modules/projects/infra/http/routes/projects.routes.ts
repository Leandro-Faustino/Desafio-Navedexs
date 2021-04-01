import { Router } from 'express';
import ProjectsController from '@modules/projects/infra/controllers/ProjectsController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const projectsRouter = Router();
const projectsController = new ProjectsController();
projectsRouter.use(ensureAuthenticated);

projectsRouter.post('/store', projectsController.create);
projectsRouter.get('/', projectsController.index);
projectsRouter.get('/:id', projectsController.show);
projectsRouter.put('/:id', projectsController.update);
projectsRouter.delete('/:id', projectsController.delete);
export default projectsRouter;

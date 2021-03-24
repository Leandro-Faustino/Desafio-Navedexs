import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import '../typeorm';
import routes from './routes';
import '@shared/container';
import AppError from './error/AppError';

const app = express();
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server error',
  });
});

app.get('/', (request, response) => {
  return response.json({ message: 'Hello my god' });
});

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('🙌 Server started on port 3333!');
});

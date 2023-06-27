import express, { Request, Response } from 'express';
import validateSignUp from './middlewares/auth/validateSignUp';
import signUpController from './controllers/auth/signUpController';

const app = express();
app.use(express.json());

app.get('/', async (_req: Request, res: Response) => res.status(200).json({
  message: 'working',
}));

app.post('/', validateSignUp, signUpController.signUp);

export default app;
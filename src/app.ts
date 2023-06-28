import express, { Request, Response } from 'express';
import validateSignUp from './middlewares/auth/validateSignUp';
import signUpController from './controllers/auth/signUpController';
import activateUserController from './controllers/auth/activateUserController';
import validateSignIn from './middlewares/auth/validateSignIn';
import signInController from './controllers/auth/signInController';

const app = express();
app.use(express.json());

app.get('/', async (_req: Request, res: Response) => res.status(200).json({
  message: 'working',
}));

app.post('/signup', validateSignUp, signUpController.signUp);
app.post('/signin', validateSignIn, signInController.signIn);
app.get('/activate/:userId/:activationCode', activateUserController.activateUser);

export default app;
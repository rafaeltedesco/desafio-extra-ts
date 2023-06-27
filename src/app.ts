import express, { Request, Response } from 'express';

const app = express();

app.get('/', async (_req: Request, res: Response) => res.status(200).json({
  message: 'working',
}));

export default app;
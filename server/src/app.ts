import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';

import cors, { CorsOptions } from 'cors';
import { DevToArticles } from '../types/dev-to.types';

dotenv.config();

const app: Express = express();
const API_KEY = process.env.API_KEY;

let corsOptions: CorsOptions = {
  origin: [
    'http://localhost:4200',
    'https://www.subhashjha.com',
    'https://subhashjha.com',
    'https://my-portfolio-pi-rosy-18.vercel.app',
  ],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/', (_req: Request, res: Response) => res.send('Welcome to the API'));

app.get('/api/devto/articles/me', async (_req: Request, res: Response) => {
  const data = await fetchDevToArticles();
  res.json(data);
});

const fetchDevToArticles = async (): Promise<DevToArticles> => {

  return fetch('https://dev.to/api/articles/me', {
    method: 'GET',
    headers: { 'api-key': API_KEY },
  }).then((data) => data.json());
};

app.listen(3000, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:3000`);
});

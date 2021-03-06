import "reflect-metadata";
import express from 'express';
import { router } from './routes';

import './database';

import './shared/container/index';

const app = express();


app.use(express.json());

app.use(router);


app.listen(3333, () => { console.log("Server run") });

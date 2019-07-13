import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import BaseRouter from './routes/base';

export const app = express();

// Add middleware/settings/routes to express.
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());

app.use(BaseRouter.path, BaseRouter.router);

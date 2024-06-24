import express from 'express';
import cors from 'cors';
import startServer from './utils/startServer.js';
import router from './routes/index.js';

const app = express();

app.use(cors({
    origin: ['http://localhost:5173'],
}));


app.use(express.json());

app.use('/api/v1', router);

startServer(app);
import express from 'express';
import env from 'dotenv';
import { getAllTasks } from './controllers/taskController';

env.config();

const server = express();
server.use(express.json());

server.use('/api/tasks', getAllTasks);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
	console.log(`server starterd on port ${PORT}`);
});

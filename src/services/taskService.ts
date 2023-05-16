import { Task } from '../types/Task';

let tasks: Task[] = [
	{
		id: 1,
		name: 'Mission 01',
		description: 'Chatbot',
		isCompleted: false,
	},
];

export const getAllTasks = () => {
	return tasks;
};

interface createTaskInput {
	name: string;
	description: string;
}

export const createTask = (input: createTaskInput) => {
	const newTask = {
		id: tasks.length + 1,
		name: input.name,
		description: input.description,
		isCompleted: false,
	};

	tasks.push(newTask);

	return newTask;
};

export const getOneTask = (taskId: number) => {
	const matchedTask = tasks.find((t) => t.id === taskId);

	if (!matchedTask) {
		throw new Error('Task not found');
	}

	return matchedTask;
};

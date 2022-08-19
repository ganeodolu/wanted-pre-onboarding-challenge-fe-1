import API from "./main";
import { AxiosResponse } from "axios";

export const getTodos = async () => {
	try {
		const response = await API.get(`/todos`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
export const getTodoById = async ({ id }: { id: string }) => {
	try {
		const response = await API.get(`/todos/${id}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
export const createTodo = async ({
	title,
	content,
}: {
	title: string;
	content: string;
}) => {
	try {
		const response = await API.post("/todos", {
			title,
			content,
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
export const updateTodo = async ({
	title,
	content,
}: {
	title: string;
	content: string;
}) => {
	try {
		const response = await API.put("/todos", {
			title,
			content,
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
export const deleteTodo = async ({ id }: { id: string }) => {
	try {
		const response = await API.delete(`/todos/${id}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

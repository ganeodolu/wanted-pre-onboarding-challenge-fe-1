import API from "./index";
import { AxiosResponse } from "axios";

const apiHandler = {
	getTodos: async () => {
		try {
			const response = await API.get(`/todos`);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
	getTodoById: async ({ id }: {id: string}) => {
		try {
			const response = await API.get(`/todos/${id}`);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
  createTodo: async ({ title, content }: {title: string, content: string}) => {
    try {
      const response = await API.post('/todos', {
        title,
        content
      })
			return response.data;
    } catch (error) {
			console.log(error);
    }
  },
  updateTodo: async ({ title, content}: {title: string, content: string}) => {
    try {
      const response = await API.put('/todos', {
        title,
        content
      })
			return response.data;
    } catch (error) {
			console.log(error);
    }
  },
  deleteTodo: async ({id}: {id: string}) => {
    try {
      const response = await API.delete(`/todos/${id}`)
			return response.data;
    } catch (error) {
			console.log(error);
    }
  },
  loginUser: async ({ email, password}: {email: string, password: string}) =>{
    try {
      const response = await API.post('/users/login', {
        email,
        password
      })
			return response.data;
    } catch (error) {
			console.log(error);
    }
  },
  signupUser: async ({ email, password}: {email: string, password: string}) =>{
    try {
      const response = await API.post('/users/create', {
        email,
        password
      })
			return response.data;
    } catch (error) {
			console.log(error);
    }
  },
};

export default apiHandler;

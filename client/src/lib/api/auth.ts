import API from "./main";

const login = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	try {
		const response = await API.post("/users/login", {
			email,
			password,
		});
    const { token } = response.data;
    localStorage.setItem('user', token);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
const signup = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	try {
		const response = await API.post("/users/create", {
			email,
			password,
		});
    const { token } = response.data;
    localStorage.setItem('user', token);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export { login, signup };

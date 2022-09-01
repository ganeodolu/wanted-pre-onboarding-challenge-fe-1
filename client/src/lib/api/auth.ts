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
    console.log(response.data)
    const { token } = response.data;
    localStorage.setItem('user', token);
		return response.data;
	} catch (error: any) {
		console.log(error);
    if(error.response.data.details){
      alert(error.response.data.details)
    }
	}
};

export { login, signup };

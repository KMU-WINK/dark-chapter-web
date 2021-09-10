import baseService from "./base-service";

export async function signUp(args) {
    const {
        email,
        password,
        nickname,
    } = args;
    await baseService.post('/users', {
        email,
        password,
        nickname,
    });
}

export async function updateUser(
  token,
  email,
  password,
  nickname,
) {
    try {
        await baseService.patch(`/users/${email}`, {
            password,
            nickname,
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
    } catch (e) {
        alert(e.response.data.error);
    }
}
export async function login(args) {
    const {
        email,
        password,
    } = args;
    return (await baseService.post('/api-token', {
        email,
        password
    })).data.token;
}

export async function getUser(email) {
    const user = await baseService.get(`/users/${encodeURI(email)}`);
    return user.data;
}

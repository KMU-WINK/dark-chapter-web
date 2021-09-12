import baseService from "./base-service";

export async function signUp(args) {
    const {
        email,
        password,
        nickname,
    } = args;
    try {
        const response = await baseService.post('/users', {
            email,
            password,
            nickname,
        })
        return response.status;
    } catch (e) {
        // console.log(typeof(e.message))
        // console.log(e.message.slice(e.message.length-3))
        return Number(e.message.slice(e.message.length - 3))
    }


}

export async function updateUser(
    token,
    email,
    password,
    nickname,
) {
    try {
        const response = await baseService.patch(`/users/${email}`, {
            password,
            nickname,
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })

        console.log(response);
    } catch (e) {
        alert(e.response.data.error);
    }
}

export async function login(args) {
    const {
        email,
        password,
    } = args;

    try {
        const userInfo = await baseService.get(`/users/${email}`)

        // 잘못된 이메일
        if (userInfo.data.status) return 402

        // 잘못된 비밀번호
        else if (userInfo.data.password !== password) return 403

        // 성공
        else if (userInfo.data.password === password) {
            const result = await baseService.post('/api-token', {
                email,
                password
            })

            sessionStorage.setItem("token",result.data.token);
            return 200
        }

    } catch (e) {
        console.log(e)
    }


}

export async function getUser(email) {
    const user = await baseService.get(`/users/${encodeURI(email)}`);
    console.log(user.data)
    return user.data;
}

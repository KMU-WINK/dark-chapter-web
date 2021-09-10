import axios from "axios";
import { ROOT_URL } from "./index";
import baseService from "./index";

export async function register(args) {
    const {
        email,
        username,
        password,
        nickname,
    } = args;
    await baseService.post('/users', {
        email,
        username,
        password,
        nickname,
    });
}

export function signUp(req) {
    return axios({
        method: 'POST',
        url: `${ROOT_URL}/users/`,
        data: req.data,
    });
}
export function login(req) {
    return axios({
        method: 'POST',
        url: `${ROOT_URL}/login/`,
        data: req.data,
    });
}

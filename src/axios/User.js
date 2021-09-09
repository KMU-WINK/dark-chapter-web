import axios from "axios";
import { ROOT_URL } from "./index";

export function readUser(req) {
    return axios({
        method: 'GET',
        url: `${ROOT_URL}/users/:username`,
        headers: req.headers ? req.headers : null,
    })
}

export function signUp(req) {
    return axios({
        method: "POST",
        url: `${ROOT_URL}/users`,
        prams: req.params ? req.params : null,
        headers: req.headers ? req.headers : null,
    })
}
import axios from 'axios';


export const ROOT_URL = "http://ec2-3-38-93-32.ap-northeast-2.compute.amazonaws.com:8000";

export const baseService = axios.create({
  baseURL: ROOT_URL.toString(),
  'Content-Type': 'application/json',
});

export default baseService;

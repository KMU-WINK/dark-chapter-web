import axios from 'axios';
const baseURL = new URL("http://ec2-3-38-93-32.ap-northeast-2.compute.amazonaws.com:8000");

export const baseService = axios.create({
  baseURL: baseURL.toString(),
  'Content-Type': 'application/json',
});

export default baseService;

import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/api/";
const GET_URL = `${BASE_URL}todos`;

export const get_todos = async () => {
  const res = await axios.get(GET_URL);
  return res.data;
};

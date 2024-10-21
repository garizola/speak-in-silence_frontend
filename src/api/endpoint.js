import axios from "axios";

const BASE_URL = "https://speak-in-silence-backend.onrender.com/api/";
const GET_URL = `${BASE_URL}todos`;
const POST_URL = `${BASE_URL}todos`;
const DELETE_URL = (id) => `${BASE_URL}todos/${id}`;

export const get_todos = async () => {
  const res = await axios.get(GET_URL);
  return res.data;
};

export const create_todo = async (todo_name) => {
  const res = await axios.post(POST_URL, {
    todo_name: todo_name,
    completed: false,
  });
  return res.data;
};

export const delete_todo = async (id) => {
  const res = await axios.delete(DELETE_URL(id));
  return res.data;
};

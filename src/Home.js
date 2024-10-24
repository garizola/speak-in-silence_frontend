import "./App.css";
import CommentBoard from "./components/CommentBoard";
import Input from "./components/Input";
import React, { useState, useEffect } from "react";
// import Nav from "./components/Nav";
import { get_todos, create_todo, delete_todo } from "./api/endpoint";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await get_todos();
      setTodos(todos);
      // console.log(todos);
    };
    fetchTodos();
  }, []);

  const addTodo = async (todo_name) => {
    const todo = await create_todo(todo_name);
    setTodos([todo, ...todos]);
  };

  const deleteTodo = async (id) => {
    delete_todo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App font-mono sm:flex ">
      {/* <Nav /> sm:ml-[120px] to below el*/}

      <section className="flex flex-col w-full ">
        <div>
          <div className="h-[300px] w-full sm:pl-10 p-4 sm:pt-10 pt-6 flex flex-col border-b-2 border-black fixed overflow-hidden bg-off-white">
            <h1 className="text-fred-blue text-3xl sm:text-4xl font-bold ">
              speak in silence
            </h1>
            <p className="text-fred-blue mb-4 ">
              this is a place to speak your thoughts. in quiet but out loud
            </p>
            <Input addTodo={addTodo} />
            <p className=" text-fred-blue text-lg sm:text-xl font-bold sm:mt-20 mt-10">
              comment board{" "}
              <span className="text-black text-sm font-normal">
                (comments may take some time to load due to backend being served
                on a free server)
              </span>
            </p>
          </div>

          <CommentBoard todos={todos} deleteTodo={deleteTodo} />
        </div>
      </section>
    </div>
  );
}

export default Home;

import "./App.css";
import CommentBoard from "./components/CommentBoard";
import InputSearch from "./components/InputSearch";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import { get_todos } from "./api/endpoint";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await get_todos();
      setTodos(todos);
      console.log(todos);
    };
    fetchTodos();
  }, []);
  return (
    <div className="App font-mono sm:flex ">
      {/* <Nav /> sm:ml-[120px] to below el*/}

      <section className="flex flex-col w-full ">
        <div>
          <div className="h-[300px] w-full sm:pl-10 p-4 pt-10 flex flex-col border-b-2 border-black fixed overflow-hidden bg-off-white">
            <h1 className="text-fred-blue text-3xl sm:text-4xl font-bold ">
              speak in silence
            </h1>
            <p className="text-fred-blue mb-4 ">
              this is a place to speak your thoughts. in quiet but out loud
            </p>
            <InputSearch />
            <p className=" text-fred-blue text-lg sm:text-xl font-bold mt-20 ">
              comment board
            </p>
          </div>

          <CommentBoard todos={todos} />
        </div>
      </section>
    </div>
  );
}

export default Home;

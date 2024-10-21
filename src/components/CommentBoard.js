import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { get_todos } from "../api/endpoint";

function CommentBoard({ todos, deleteTodo }) {
  return (
    <section className=" mt-[300px]">
      <div className="min-h-fit p-4  sm:pl-10">
        <div className="flex flex-wrap gap-10">
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo_id={todo.id}
                todo_name={todo.todo_name}
                id={todo.id}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CommentBoard;

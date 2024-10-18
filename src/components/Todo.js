import React from "react";
import "../App.css";

function Todo({ todo_name, todo_id }) {
  console.log({ todo_id });
  return (
    <div className="h-auto max-h-[300px] flex-col flex align-middle justify-center sm:w-[30%] max-w-[100%] min-w-[200px] bg-off-white pb-4 p-2 border-b-2 border-black">
      <div className="flex w-full justify-between pb-2">
        <p className="font-bold">{todo_id}</p>
        <span>x</span>
      </div>

      <p className="sm:overflow-scroll overflow-hidden sb-custom cursor-pointer">
        {todo_name}
      </p>
    </div>
  );
}

export default Todo;
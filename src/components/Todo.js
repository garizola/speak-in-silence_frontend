import React from "react";
import "../App.css";

function Todo({ todo_name, todo_id, id, deleteTodo }) {
  // console.log({ todo_id });
  const handleDelete = () => {
    deleteTodo(id);
  };
  return (
    <div className="h-auto max-h-[300px] md:h-[300px] flex-col flex align-middle justify-center sm:w-[30%] w-[100%] min-w-[200px] bg-off-white pb-4 p-2 border-b-2 border-black">
      <div className="flex w-full justify-between pb-2">
        <p className="font-bold">{todo_id}</p>
        <span
          onClick={handleDelete}
          className="hover:text-red-700 cursor-pointer"
        >
          x
        </span>
      </div>

      <p className="sm:overflow-scroll overflow-hidden sb-custom cursor-pointer">
        {todo_name}
      </p>
    </div>
  );
}

export default Todo;

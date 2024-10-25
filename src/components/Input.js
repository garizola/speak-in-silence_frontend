import React, { useState } from "react";

function Input({ addTodo }) {
  const [input, setInput] = useState("");
  const handleAdd = () => {
    console.log(input);
    addTodo(input);
    setInput("");
  };

  return (
    <div className="h-full flex-col max-w-[350px] md:max-w-[768px] flex align-middle justify-center font-fred-blue  ">
      <h3>Input</h3>
      <div className=" flex gap-4">
        <input
          type="textarea"
          onChange={(e) => setInput(e.target.value)}
          className="bg-off-white p-2 max-h-10 border-black border-2 active:border-fred-blue focus:border-fred-blue focus:outline-none w-full"
          placeholder="type what you're thinking :)"
          value={input}
        />
        <button
          type="submit"
          className="border-black border-2  px-4 h-10 hover:bg-fred-blue"
          onClick={handleAdd}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Input;

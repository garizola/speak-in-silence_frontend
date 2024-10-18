import React from "react";

function InputSearch() {
  return (
    <div className="h-full flex-col max-w-[350px] md:max-w-[768px] flex align-middle justify-center font-fred-blue  ">
      <h3>Input</h3>
      <input
        type="textarea"
        className="bg-off-white p-2 max-h-10 border-black border-2 active:border-fred-blue focus:border-fred-blue focus:outline-none"
        placeholder="type what you're thinking :)"
      />
    </div>
  );
}

export default InputSearch;

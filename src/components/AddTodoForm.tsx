import React, { useState, useEffect } from "react";
import { useTodoContext } from "../context/TodoContext";
import { PlusCircle } from "lucide-react";

const AddTodoForm = () => {
  const { onAddTodo } = useTodoContext();
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("low");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return setError("Please fill the input");
    setError("");
    onAddTodo(input, priority);
    setInput("");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (error) {
        setError("");
      }
    }, 4000);

    return () => clearTimeout(timeout); // Cleanup the timeout on component unmount or re-render
  }, [error]);

  return (
    <>
      <form className="flex items-center" onSubmit={handleSubmit}>
        <div className="relative flex items-center grow">

        <div className="flex gap-2  bg-white items-center rounded-s-md border-r-0 px-4 py-2 grow border border-gray-400">
          <span className="w-5 h-5 rounded-full border-2 border-gray-400"></span>
          <input
            type="text"
            placeholder="what to do next?"
            className="text-[20px]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <select
          name="select priority"
          className="px-4 py-1 w-24 text-center h-8 absolute right-2 bg-gray-100 rounded-[10px] border border-gray-400"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
        </div>

        <button
          type="submit"
          className="w-20 rounded-e-md p-2 bg-gray-100 text-black border-slate-400 border flex justify-center items-center gap-2"
        >
          Add
          <PlusCircle size={18} />
        </button>
      </form>
      {error && <p className="text-red-500 text-center font-medium">{error}</p>}
    </>
  );
};

export default AddTodoForm;

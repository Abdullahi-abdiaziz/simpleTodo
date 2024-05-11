import React from "react";
import { Trash2 } from "lucide-react";
import { useTodoContext } from "../context/TodoContext";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { onDeleteTodo, setTodoCompleted } = useTodoContext();

  return (
    <div className={`flex items-center gap-2`}>
      <label
        className={`${todo.priority} flex gap-2 border px-4 py-2 rounded-md border-gray-400 grow bg-white hover:bg-slate-50 hover:cursor-pointer`}
      >
        <input
          type="checkbox"
          className="scale-125 hover:cursor-pointer"
          checked={todo.completed}
          onChange={(e) => setTodoCompleted(todo.id, e.target.checked)}
        />
        <span
          className={`${todo.completed ? "line-through text-gray-400" : ""}`}
        >
          {todo.title}
        </span>
      </label>
      <button onClick={() => onDeleteTodo(todo.id)} className="p-2 ">
        <Trash2
          size={20}
          className="text-gray-500 hover:text-red-300 hover:cursor-pointer"
        />
      </button>
    </div>
  );
};

export default TodoItem;

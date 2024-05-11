import { useTodoContext } from "../context/TodoContext";

const TodoSummary = () => {
  const { todos, deleteAllCompleted } = useTodoContext();

  return (
    <div>
      {todos.length > 0 && (
        <div className="flex justify-center items-center gap-4">
          <p className="text-center text-gray-500">
            {todos.filter((todo) => todo.completed).length} /{todos.length}{" "}
            todos completed
          </p>
          <p
            className="text-red-600 hover:underline hover:cursor-pointer"
            onClick={deleteAllCompleted}
          >
            {todos.filter((todo) => todo.completed ).length > 0 && "Delete all completed"}
          </p>
        </div>
      )}
    </div>
  );
};

export default TodoSummary;

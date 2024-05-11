import { useTodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodoContext();

  const todoSorted = todos?.sort((a, b) => {
    // First, sort by completion status
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    
    // If completion status is the same, sort by priority levels
    const priorityOrder: {[key: string]: number} = {
      high: 3,
      medium: 2,
      low: 1
    };
    
    if (priorityOrder[a.priority] < priorityOrder[b.priority]) return 1;
    if (priorityOrder[a.priority] > priorityOrder[b.priority]) return -1;
    
    return 0;
  });

  return (
    <div className="space-y-2">
      {todoSorted?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      {todos.length === 0 && (
        <p className="text-center text-gray-500">No todos to show</p>
      )}
    </div>
  );
};

export default TodoList;

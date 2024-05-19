import React, { createContext, useContext, useEffect, useState } from "react";
import  {Todo} from "../types/todo";
import { dummyData } from "../data/todos";

interface TodoContextProps {
  todos: Todo[];
  onAddTodo: (text: string, priority: string) => void;
  setTodoCompleted: (id: number, completed: boolean) => void;
  onDeleteTodo: (id: number) => void;
  deleteAllCompleted: () => void;
}

// Create the context with default values
export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  onAddTodo: () => {},
  setTodoCompleted: () => {},
  onDeleteTodo: () => {},
  deleteAllCompleted: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};
export const TodoProvider: React.FC = ({ children }) => { 
  const [todos, setTodos] = useState(() => {
    const savedTodos: Todo[] = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );
    return savedTodos.length > 0 ? savedTodos : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const setTodoCompleted = (id: number, completed: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const onAddTodo = (title: string, priority: string) => {
    setTodos((prevTodos) => [
      {
        id: Date.now(),
        title,
        completed: false,
        priority,
      },
      ...prevTodos,
    ]);
  };

  const onDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const deleteAllCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  // const value: TodoContextProps = {
  //   todos,
  //   onAddTodo,
  //   setTodoCompleted,
  //   onDeleteTodo,
  //   deleteAllCompleted,
  // };

  // return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
  return (
    <TodoContext.Provider
      value={{
        todos,
        onAddTodo,
        setTodoCompleted,
        onDeleteTodo,
        deleteAllCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

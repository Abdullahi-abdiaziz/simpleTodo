import { TodoProvider } from "./context/TodoContext";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import Priority from "./components/Priority";
import TodoSummary from "./components/TodoSummary";

const App = () => {
  return (
    <TodoProvider>
      <main className="py-10 h-screen space-y-5 font-poetsen">
        <h1 className="text-3xl font-bold text-center">My Todos</h1>
        <div className="max-w-lg mx-auto space-y-5 rounded-md p-5 bg-slate-100">
          <AddTodoForm />
          <Priority />
          <TodoList />
        </div>
        <TodoSummary />
      </main>
    </TodoProvider>
  );
};

export default App;

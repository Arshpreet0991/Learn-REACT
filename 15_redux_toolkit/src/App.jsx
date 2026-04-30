import "./App.css";
import AddTodo from "./app/components/AddTodo";
import Todos from "./app/components/Todos";

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-full min-h-screen flex-col ">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;

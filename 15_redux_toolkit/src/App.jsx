import "./App.css";
import AddTodo from "./app/components/AddTodo";

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-full min-h-screen flex-col">
        <AddTodo />
      </div>
    </>
  );
}

export default App;

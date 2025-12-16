import "./App.css";
import PropertiesList from "./components/PropertiesList";
import ToDoList from "./components/ToDoList";

function App() {
  const rentalProperties = [
    {
      id: 1,
      name: "Maple View Apartments",
      rating: 4.5,
      priceCad: 1850,
    },
    {
      id: 2,
      name: "Lakeside Residences",
      rating: 4.2,
      priceCad: 2100,
    },
    {
      id: 3,
      name: "Downtown Loft Suites",
      rating: 4.8,
      priceCad: 2450,
    },
    {
      id: 4,
      name: "Pine Crest Townhomes",
      rating: 4.0,
      priceCad: 1700,
    },
    {
      id: 5,
      name: "Riverwalk Condos",
      rating: 4.6,
      priceCad: 2300,
    },
  ];

  const todoList = [
    {
      id: 1,
      task: "Buy groceries",
      isCompleted: false,
    },
    {
      id: 2,
      task: "Finish React homework",
      isCompleted: true,
    },
    {
      id: 3,
      task: "Go to the gym",
      isCompleted: false,
    },
    {
      id: 4,
      task: "Call parents",
      isCompleted: true,
    },
    {
      id: 5,
      task: "Clean the apartment",
      isCompleted: false,
    },
  ];

  return (
    <>
      <PropertiesList rentalProperties={rentalProperties} />
      <ToDoList list={todoList} />
    </>
  );
}

export default App;

import Task from "./Task";

export default function ToDoList({ list }) {
  return (
    <>
      <ul>
        {list.map((l) => (
          <Task {...l} />
        ))}
      </ul>
    </>
  );
}

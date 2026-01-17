# To-Do List

## Points to keep in mind

TaskList is the parent component.

- TaskList is the parent component and owns the tasks state.
- It is responsible for managing and rendering the List.
- Each entry on the list is added here.
- We are creating an Array of objects.
- Form is responsible for creating an `object` which contains details like `task` and `isCompleted`.
- this object is then passed to `addTask` method.
- addTask method then adds the object to the list and then it is rendered.
- Key point here is that, task has to be added to list in TaskList component. Form is only responsible for collecting user input and creating an object.
- The task is added in TaskList because state can only be updated in the component that owns it; the Form only collects input and passes data upward.

## TaskList (Parent Component)

```jsx
import { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuid } from "uuid";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskObj) => {
    setTasks((prevTasks) => {
      return [...prevTasks, { ...taskObj, id: uuid() }];
    });
  };

  return (
    <>
      <ToDoForm onSubmit={addTask} />

      {tasks.length > 0 && (
        <>
          <h1>Tasks</h1>
          <div>
            <ul className="w-xl ">
              {tasks.map((i) => (
                <li key={i.id}>
                  {i.task}
                  <button>Del</button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
```

## To Do Form

```jsx
import { useState } from "react";

export default function ToDoForm({ onSubmit }) {
  const [formData, setFormData] = useState({ task: "", isCompleted: false });

  const handleOnChange = (evt) => {
    setFormData((currentData) => {
      return { ...currentData, [evt.target.name]: evt.target.value };
    });
  };

  const handleOnSubmit = (prevTasks   onSubmit(formData);
    setFormData({ task: "", isCompleted: false });
  };

  return (
    <>
      <h1>Simple To-Do List</h1>

      <div>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Enter Task..."
          value={formData.task}
          onChange={handleOnChange}
        />
        <button onClick={handleOnSubmit}>Add</button>
      </div>
    </>
  );
}
```

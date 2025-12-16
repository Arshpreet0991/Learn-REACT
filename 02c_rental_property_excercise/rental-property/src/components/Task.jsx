export default function Task({ task, isCompleted, id }) {
  return (
    <>
      <li>
        {task} - Completed: {isCompleted}
      </li>
    </>
  );
}

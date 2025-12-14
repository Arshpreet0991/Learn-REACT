export default function ({ items }) {
  return (
    <>
      <ul>
        {items.map((i) => (
          <li style={{ color: i.isCompleted ? "blue" : "red" }}>
            {i.item} - {i.quantity}
          </li>
        ))}
      </ul>
    </>
  );
}

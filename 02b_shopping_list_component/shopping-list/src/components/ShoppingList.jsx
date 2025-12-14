export default function ({ items }) {
  return (
    <>
      {/* whenever we iterate in a react, we need to provide a unique id to each
      iteration. In this case, we have to provide id to each list. Id can be
      from Database, which is preferable */}

      {/* We give these keys because if we make a dynamic list where elements are being inserted and removed a lot, react will have to know precisely what to render and what to remove. Otherwise, it is very bad for optimize. */}

      <ul>
        {items.map((i) => (
          <li key={i.id} style={{ color: i.isCompleted ? "blue" : "red" }}>
            {i.item} - {i.quantity}
          </li>
        ))}
      </ul>
    </>
  );
}

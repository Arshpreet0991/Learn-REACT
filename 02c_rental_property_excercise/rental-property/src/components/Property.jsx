export default function Property({ name, priceCad, rating, id }) {
  //console.log(property);

  return (
    <>
      <div style={{ margin: 25 }}>
        <h3>{name}</h3>
        <h3>${priceCad} per month</h3>
        <h4>Ratings: {rating} ⭐</h4>
      </div>
    </>
  );
}

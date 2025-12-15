import Property from "./Property";

export default function PropertiesList({ rentalProperties }) {
  return (
    <>
      <div style={{ display: "flex" }}>
        {rentalProperties.map((p) => (
          <Property
            name={p.name}
            priceCad={p.priceCad}
            id={p.id}
            rating={p.rating}
            key={p.id}
          />
        ))}
      </div>
    </>
  );
}

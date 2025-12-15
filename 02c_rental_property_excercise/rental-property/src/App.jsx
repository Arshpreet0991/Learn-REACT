import "./App.css";
import PropertiesList from "./components/PropertiesList";

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

  return (
    <>
      <PropertiesList rentalProperties={rentalProperties} />
    </>
  );
}

export default App;

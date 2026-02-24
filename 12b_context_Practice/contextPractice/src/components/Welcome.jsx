import React from "react";
import RegisterContext from "../context/RegisterContext";
import { useContext } from "react";

function Welcome() {
  const { user } = useContext(RegisterContext);

  if (!user) return <>Resister user please</>;

  return <div>Welcome: {user.name} </div>;
}

export default Welcome;

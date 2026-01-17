import { useState } from "react";
import { v4 as uuid } from "uuid";
import RegistrationForm from "./RegistrationForm";

export default function ParticipantsList() {
  const [person, setPerson] = useState([]);

  const addPerson = (personObj) => {
    console.log(personObj);

    setPerson((prev) => {
      return [...prev, { ...personObj, id: uuid() }];
    });
  };

  return (
    <>
      <div>
        <RegistrationForm onSubmit={addPerson} />
        <h1>List of Participants</h1>
        <ul>
          {person.map((p) => {
            return (
              <li key={p.id}>
                {p.firstName} {p.lastName} {p.age}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

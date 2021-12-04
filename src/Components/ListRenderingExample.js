import React from "react";
import ListRenderingProps from "./ListRenderingProps";

function ListRenderingExample() {
  const PersonList = [
    {
      id: 1,
      name: "Dk",
      city: "Dindigul",
    },
    {
      id: 2,
      name: "AK",
      city: "Theni",
    },
    {
      id: 3,
      name: "PK",
      city: "Chennai",
    },
  ];

  const PersonData = PersonList.map((person) => (
    <ListRenderingProps person={person}></ListRenderingProps>
  ));
  return <div>{PersonData}</div>;
}

export default ListRenderingExample;

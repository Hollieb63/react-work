import React from "react";
import Heading from "./heading";

export default function Card({ title, description }) {
  return (
    <div>
      <Heading text={title} />
      <p>{description}</p>
    </div>
  );
}

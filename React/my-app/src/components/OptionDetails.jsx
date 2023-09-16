import React from "react";
import { useParams } from "react-router-dom";

function OptionDetails() {
  const { id } = useParams();

  return (
    <div className="option-detail">
      <h2>Selected Option:</h2>
      <p>{`Option ${id}`}</p>
    </div>
  );
}

export default OptionDetails;

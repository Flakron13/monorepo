import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";

function List() {
  const options = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
    { id: 4, name: "Option 4" },
  ];

  return (
    <div className="body d-flex flex-column align-items-center justify-content-center gap-5 bg-light w-100 h-100">
      <h2>Select an option:</h2>
      <div className="d-flex flex-column align-items-center justify-content-center w-100 p-5">
        {options.map((option) => (
          <div key={option.id} className=" w-100 p-2 d-flex align-items-center justify-content-center gap-3 bg-white">
            <img src={avatar} height={32} width={32} />
            <Link to={`/option/${option.id}`}>{option.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;

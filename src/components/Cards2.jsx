import React from "react";

function Cards2({ item }) {
  return (
    <div className="">
      <p
        className="bg-white rounded-md  border-slate-400 m-2 text-justify  p-2 
     text-black
      font-medium "
      >
        {item.info}
      </p>
    </div>
  );
}

export default Cards2;

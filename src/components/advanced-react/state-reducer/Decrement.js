import React from "react";

const Decrement = ({ onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className="decrement p-5 flex items-center justify-center bg-slate-200 text-lg cursor-pointer "
    >
      -
    </button>
  );
};

export default Decrement;

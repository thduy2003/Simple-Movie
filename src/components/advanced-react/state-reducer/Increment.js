import React from "react";

const Increment = ({ onClick, ...props }) => {
  return (
    <button
      className="increment p-5 flex items-center justify-center bg-slate-200 text-lg cursor-pointer"
      {...props}
      onClick={onClick}
    >
      +
    </button>
  );
};

export default Increment;

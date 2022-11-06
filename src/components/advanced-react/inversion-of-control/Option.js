import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = (props) => {
  const context = useDropdown();

  return (
    <div
      className="option-item p-4 cursor-pointer flex items-center justify-between"
      onClick={() => context.onClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Option;

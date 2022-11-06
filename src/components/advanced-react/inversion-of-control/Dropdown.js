import React, { useState } from "react";
import { DropdownProvider } from "./dropdown-context";

const Dropdown = ({
  options,
  placeholder = "Please select the options",
  children,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full max-w-[300px]">
        <div
          className="placeholder flex items-center justify-between cursor-pointer p-4 border border-gray-300 rounded"
          onClick={handleToggleDropdown}
        >
          {placeholder}
        </div>
        {show && children}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;

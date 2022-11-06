import React from "react";
import { useAccordion } from "./accordion-context";

const AccordionHeader = ({ children }) => {
  const { show, handleToggleShow } = useAccordion();
  return (
    <div
      className="header cursor-pointer p-4 rounded-lg border border-gray-300 flex items-center justify-between"
      onClick={handleToggleShow}
    >
      {children}
      {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;

import React from "react";
import { useAccordion } from "./accordion-context";

const AccordionContent = ({ children }) => {
  const { show } = useAccordion();
  return <div>{show && <div className="content">{children} </div>}</div>;
};

export default AccordionContent;

import React from "react";
import { useDropdown } from "./dropdown-context";

const Search = (props) => {
  const context = useDropdown();
  return (
    <div className="p-2">
      <input
        type="text"
        placeholder={context.inputPlaceHolder}
        onChange={context.onChange}
        className="p-4 outline-none w-full border border-gray-200 rounded text-black "
        {...props}
      />
    </div>
  );
};

export default Search;

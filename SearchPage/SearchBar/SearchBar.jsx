import React from "react";
import { BsArrow90DegRight, BsSearch } from "react-icons/bs";

import Style from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={Style.SearchBar}>
      <div className={Style.SearchBar_box}>
        <BsSearch className={Style.SearchBar_box_icon} />
        <input type="text" placeholder="Type keyword..." />
        <BsArrow90DegRight className={Style.SearchBar_box_icon} />
      </div>
    </div>
  );
};

export default SearchBar;

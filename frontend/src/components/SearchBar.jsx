// import React from "react";
import SearchIcon from '../assets/icons/ion_search.svg'
import { useState } from 'react';

const SearchBar = () => {
    const [data, setData] = useState({
        search: "",
        
      });
      const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value,
        });
      };
  return (
    <div className="button-wrapper w-fit flex ml-[250px] justify-center items-center gap-2.5 px-10 py-3 rounded-full bg-white ext-shadow-one upload-project-button-shadow mb-16">
      <img src={SearchIcon} alt="search" />
      <input
        type="text"
        id="search"
        name="search"
        value={data.search}
        placeholder="Search here ...."
        className="pl-12 bg-[rgba(255,255,255,0.1)] text-black px-96 py-2 rounded-full"
        onChange={handleOnChange}
        
      />
    </div>
  );
};

export default SearchBar;

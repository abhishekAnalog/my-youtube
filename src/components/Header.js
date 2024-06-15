import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./constant/api";
import { searchCaches } from "../utils/searchslice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchCache = useSelector((store) => store.search);
  console.log(searchCache,"searchCache")
  console.log(searchCache[searchQuery],"setSearchQuery")
  const toogleMenuHandler = () => {
    dispatch(toogleMenu());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchResult();
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchResult = async () => {
    const result = await fetch(YOUTUBE_SEARCH_API + searchQuery,{
      cache:"force-cache"
    });
    const data = await result.json();
    console.log(data,'searchResult data');
    setSuggestions(data.items[0]);
    dispatch(
      searchCaches({
        [searchQuery]: data.items[0],
      })
    );
  };
  console.log(suggestions, "suggestions");
  return (
    <div className="grid grid-flow-col m-2 p-2 shadow-lg">
      <div className="flex">
        <img
          className="w-1/12 h-12 mx-2 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg"
          alt="menu"
          onClick={() => toogleMenuHandler()}
        />
        <img
          className="w-3/12 h-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Q-H7A7-XNWqvZju8Maqd6S_f-Pr9FssqQ7pgxEVKxA&s"
          alt="logo"
        />
      </div>
      <div className="col-span-3 h-4">
        <input
          className="border rounded-l-full w-3/4 p-2"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button
          htmlFor="search"
          className="border rounded hover:bg-gray-400 p-2"
          s
        >
          Search
        </button>
      </div>

      <div>
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzdC8tyLdAaX5o6jygK9y6ruUdNcAyNqLjZTW1XuN6w&s"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;

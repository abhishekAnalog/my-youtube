import React from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toogleMenuHandler = () => {
    dispatch(toogleMenu());
  };
  return (
    <div className="grid grid-flow-col m-2 p-2 shadow-lg">
      <div className="flex">
        <img
          className="w-1/12 h-12 mx-2 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg"
          alt="menu"
          onClick={() => 
            toogleMenuHandler()
          }
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
          id="search"
          placeholder="Search"
          value={""}
          onChange={() => {}}
        />
        <button
          htmlFor="search"
          className="border rounded hover:bg-gray-400 p-2"
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

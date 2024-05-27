import { React } from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector(state => state.app.isMenuOpen)

  if(!isMenuOpen) return null;
  return (
    <div className="col-span-1 p-5 shadow-lg">
      <h1 className="font-bold py-2">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Shorts</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold py-2">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Shorts</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold py-2">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Shorts</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold py-2">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Shorts</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;

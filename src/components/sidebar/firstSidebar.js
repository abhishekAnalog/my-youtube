import { React } from "react";
import Sidebar from './Sidebar'

const FirstSidebar = () => {
  return (
    <div>
      <Sidebar title='Home'/>
      <Sidebar title='Shorts'/>
      <Sidebar title='Subscription'/>

    </div>
  );
};

export default FirstSidebar;

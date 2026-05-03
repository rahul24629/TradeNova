import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useUser } from "@clerk/clerk-react";




const Home = () => {
  const {user}=useUser();
  return (
    <>
      <TopBar user={user}/>
      <Dashboard user={user}/>
    </>
  );
};

export default Home;
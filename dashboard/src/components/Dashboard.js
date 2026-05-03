import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = ({user}) => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        {
          user?<WatchList />:<h2 style={{flexBasis:"32%",height:"100%",boxSizing:"border-box",boxShadow:"0px 0px 4px 1px rgb(236, 235, 235)",overflowY:"auto",position:"relative",alignContent:"center",paddingLeft:"140px"}}>Plz Login to Continue</h2>
        }
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
import React, { Component } from "react";

import DataProvider from "./DataProvider";

class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
         <DataProvider/>
      </div>
      
    );
  }
}
export default Dashboard;

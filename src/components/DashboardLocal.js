import React, { Component } from "react";

import DataProvider from "./DataProvider";

class DashboardLocal extends Component {
  render() {
    return (
      <div className="animated fadeIn">
         <DataProvider/>
      </div>
      
    );
  }
}
export default DashboardLocal;

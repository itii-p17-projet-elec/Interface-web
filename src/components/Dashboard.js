import React, { Component } from "react";

import RestDataProvider from "./RestDataProvider";

class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
         <RestDataProvider/>
      </div>
      
    );
  }
}
export default Dashboard;

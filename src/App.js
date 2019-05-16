import React from "react";
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import Accueil from "./components/Accueil";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import DashboardLocal from "./components/DashboardLocal";
import "./App.scss";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

function App() {
  return (
     <BrowserRouter>

      <div className = "App">
        <NavBar/>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Redirect exact from="/" to="Accueil"></Redirect>
            <Route exact path="/Accueil" component={Accueil} />
            <Route path="/dashboard" component = {Dashboard}/>
            <Route path="/dashboard-local" component = {DashboardLocal}/>
          </Switch>
        </React.Suspense>
        <Footer/>
      </div>
    </BrowserRouter> 
  );
}

export default App;

import React, { Component } from "react";
import axios from "axios";

class RestDataProvider extends Component {
  state = {
    datasTension: [],
    datasTemperatureBatterie: [],
    datasTemperatureAmbiante: [],
    datasChargeBatterie: [],
    datasCourantCharge: [],
    datasCourantDecharge: [],
    datasEnergieProduite: [],
    datasPuissanceSignal: []
  };
  componentDidMount() {
    //Methode asynchrone, retourne une promesse
    axios
      .get("localhost:8080/api/db/select")
      //then() se déclenche quand le get est complet, res est l'objet retourné par la promesse.
      .then(res => {
        console.log(res);
        let newTension = {
            id:null,
            timestamp:null,
            value:null
        }
        res.data.map(data=>{
            newTension = {
                id:data.id,
                timestamp:data.timestamp,
                value:data.voltageBattery
            }
           let newTensions=[...newTension,newTension]
        })
        this.setState({
           datasTension:newTensions
        });
      });
  }
  render() {
    return (
      <div>
        <TensionBatterie datas={this.state.datasTension} />
        <TemperatureBatterie datas={this.state.datasTemperatureBatterie} />
        <TemperatureAmbiante datas={this.state.datasTemperatureAmbiante} />
        <ChargeBatterie datas={this.state.datasChargeBatterie} />
        <CourantCharge datas={this.state.datasCourantCharge} />
        <CourantDecharge datas={this.state.datasCourantDecharge} />
        <EnergieProduite datas={this.state.datasEnergieProduite} />
        <PuissanceSignal datas={this.state.datasPuissanceSignal} />
      </div>
    );
  }
}
export default RestDataProvider;

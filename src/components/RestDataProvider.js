import React, { Component } from "react";
import axios from "axios";

import TensionBatterie from "./TensionBatterie";
import TemperatureBatterie from "./TemperatureBatterie";
import ChargeBatterie from "./ChargeBatterie";
import CourantCharge from "./CourantCharge";
import CourantDecharge from "./CourantDecharge";
import EnergieProduite from "./EnergieProduite";
import PuissanceSignal from "./PuissanceSignal";
import TemperatureAmbiante from "./TemperatureAmbiante";
import { nullLiteral } from "@babel/types";

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
    const requestBody = {
      limit: 5
    };
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    //Methode asynchrone, retourne une promesse
    axios
      .get("http://localhost:8080/api/db/select", requestBody, config)
      //then() se déclenche quand le get est complet, res est l'objet retourné par la promesse.
      .then(res => {
        console.log(res);
        let voltages = res.data.map(data => {
          return ({
            id: data.id,
            TimeStamp: data.timestamp,
            Value: data.voltageBattery
          })
        });
        let tempsBattery = res.data.map(data => {
          return ({
            id: data.id,
            TimeStamp: data.timestamp,
            Value: data.tempBattery
          })
        });
        let tempsAmbient = res.data.map(data => {
          return ({
            id: data.id,
            TimeStamp: data.timestamp,
            Value: data.tempAmbient
          })
        });
        let loadsBattery = res.data.map(data => {
          return ({
            id: data.id,
            TimeStamp: data.timestamp,
            Value: data.loadBattery
          })
        });
        let currentCharge = res.data.map(data => {
          return ({
            id: data.id,
            TimeStamp: data.timestamp,
            Value: data.currentConsuption
          })
        });
        let currentDischarge = res.data.map(data => {
          return ({
            id: data.id,
            TimeStamp: data.timestamp,
            Value: data.currentDischarge
          })
        });
        let powersSignal = res.data.map(data => {
          return ({
            id: data.id,
            TimeStamp: data.timestamp,
            ValueRSSI: data.powerSignal,
            ValueSNR: null
          })
        });

        this.setState({
          datasTension: voltages,
          datasTemperatureBatterie: tempsBattery,
          datasTemperatureAmbiante: tempsAmbient,
          datasChargeBatterie: loadsBattery,
          datasCourantCharge: currentCharge,
          datasCourantDecharge: currentDischarge,
          datasEnergieProduite: null,
          datasPuissanceSignal: powersSignal
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
        {/* <EnergieProduite datas={this.state.datasEnergieProduite} /> */}
        <PuissanceSignal datas={this.state.datasPuissanceSignal} />
      </div>
    );
  }
}
export default RestDataProvider;

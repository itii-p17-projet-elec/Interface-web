import React, { Component } from "react";
import tensions from "./FakeDataSources/TensionBatterieFakeDataSource";
import temperaturesBatterie from "./FakeDataSources/TemperatureBatterieFakeDataSource";
import temperaturesAmbiante from "./FakeDataSources/TemperatureAmbianteFakeDataSource";
import chargesBatterie from "./FakeDataSources/ChargeBatterieFakeDataSource";
import courantsCharge from "./FakeDataSources/CourantChargeFakeDataSource";
import courantsDecharge from "./FakeDataSources/CourantDechargeFakeDataSource";
import energiesProduite from "./FakeDataSources/EnergieProduiteFakeDataSource";
import puissancesSignal from "./FakeDataSources/PuissanceSignalFakeDataSource";

import TensionBatterie from "./TensionBatterie";
import TemperatureBatterie from "./TemperatureBatterie";
import ChargeBatterie from "./ChargeBatterie";
import CourantCharge from "./CourantCharge";
import CourantDecharge from "./CourantDecharge";
import EnergieProduite from "./EnergieProduite";
import PuissanceSignal from "./PuissanceSignal";
import TemperatureAmbiante from "./TemperatureAmbiante";

class DataProvider extends Component {
  state = {
    datasTension: [],
    datasTemperatureBatterie : [],
    datasTemperatureAmbiante : [],
    datasChargeBatterie : [],
    datasCourantCharge : [],
    datasCourantDecharge : [],
    datasEnergieProduite : [],
    datasPuissanceSignal : [],

  };
  componentDidMount(){
      this.setState({
        datasTension:tensions.datas,
        datasTemperatureBatterie : temperaturesBatterie.datas,
        datasTemperatureAmbiante : temperaturesAmbiante.datas,
        datasChargeBatterie : chargesBatterie.datas,
        datasCourantCharge : courantsCharge.datas,
        datasCourantDecharge : courantsDecharge.datas,
        datasEnergieProduite : energiesProduite.datas,
        datasPuissanceSignal : puissancesSignal.datas,
         
      })

  }
  render() {
    return (
      <div>
        <TensionBatterie datas={this.state.datasTension}></TensionBatterie>
        <TemperatureBatterie datas={this.state.datasTemperatureBatterie}></TemperatureBatterie>
        <TemperatureAmbiante datas={this.state.datasTemperatureAmbiante}/>
        <ChargeBatterie datas={this.state.datasChargeBatterie}/>
        <CourantCharge datas={this.state.datasCourantCharge}/>
        <CourantDecharge datas={this.state.datasCourantDecharge}/>
        <EnergieProduite datas={this.state.datasEnergieProduite}/>
        <PuissanceSignal datas={this.state.datasPuissanceSignal}/>

      </div>
    );
  }
}

export default DataProvider;

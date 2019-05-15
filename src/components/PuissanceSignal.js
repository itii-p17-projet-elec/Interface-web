import React from "react";
import { Line } from "react-chartjs-2";
import { Card, CardBody, CardHeader, CardGroup, Table } from "reactstrap";



const TemperatureAmbiante = ({ datas }) => {
  let Labels = []
  let DataSNR = []
  let DataRSSI = []
  const dataList = datas.map(data => {
     Labels = [data.TimeStamp,...Labels];
     DataSNR = [data.ValueSNR,...DataSNR];
     DataRSSI = [data.ValueRSSI,...DataRSSI];
    return (
      <tr key={data.id}>
        <th scope="row">{data.id}</th>
        <td>{data.TimeStamp}</td>
        <td>{data.ValueRSSI}</td>
        <td>{data.ValueSNR}</td>
      </tr>
    );
  });

  const line = {
    labels: Labels,
    datasets: [
      {
        label: "Puissance Signal (dBm)",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(00,00,139,0.4)",
        borderColor: "rgba(00,00,139,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(00,00,139,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(00,00,139,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: DataRSSI
      },
      {
        label: "Rapport Signal Bruit (dB)",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(0,139,139,0.4)",
        borderColor: "rgba(0,139,139,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(0,139,139,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(0,139,139,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: DataSNR
      }
    ]
  };
  return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader align="center"><h4><i className="fa fa-rss"></i>Puissance Signal</h4></CardHeader>
        <CardBody>
          <CardGroup>
          <Card>
                <CardBody>
                  <div className="chart-wrapper">
                    <Line data={line}/>
                  </div>
                </CardBody>
              </Card>
              <Card>
            <Table striped bordered responsive>
              <thead align="center">
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Puissance Signal (dBm)</th>
                  <th>Rapport Signal Bruit (dB)</th>
                </tr>
              </thead>
              <tbody align="center">{dataList}</tbody>
            </Table>
            </Card>
          </CardGroup>
        </CardBody>
      </Card>
    </div>
  );
};
export default TemperatureAmbiante;

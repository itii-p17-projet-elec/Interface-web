import React from "react";
import { Line } from "react-chartjs-2";
import { Card, CardBody, CardHeader, CardGroup, Table } from "reactstrap";

const TemperatureBatterie = ({ datas }) => {
  let Labels = [];
  let Data = [];
  const dataList = datas.map(data => {
    Labels = [data.TimeStamp, ...Labels];
    Data = [data.Value, ...Data];
    return (
      <tr key={data.id}>
        <th scope="row">{data.id}</th>
        <td>{data.TimeStamp}</td>
        <td>{data.Value}</td>
      </tr>
    );
  });

  const line = {
    labels: Labels,
    datasets: [
      {
        label: "Température Batterie (°C)",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(148,0,211,0.4)",
        borderColor: "rgba(148,0,211,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "(148,0,211,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(148,0,211,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Data
      }
    ]
  };
  return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader align="center">
          <h4>
            <i className="fa fa-thermometer-2" />Température Batterie
          </h4>
        </CardHeader>
        <CardBody>
          <CardGroup>
            <Card>
              <CardBody>
                <div className="chart-wrapper">
                  <Line data={line} />
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Table striped bordered responsive>
                  <thead align="center">
                    <tr>
                      <th>#</th>
                      <th>Date</th>
                      <th>Température (°C)</th>
                    </tr>
                  </thead>
                  <tbody align="center">{dataList}</tbody>
                </Table>
              </CardBody>
            </Card>
          </CardGroup>
        </CardBody>
      </Card>
    </div>
  );
};
export default TemperatureBatterie;

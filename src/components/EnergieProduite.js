import React from "react";
import { Bar } from "react-chartjs-2";
import { Card, CardBody, CardHeader, CardGroup, Table } from "reactstrap";

const EnergieProduite = ({ datas }) => {
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

  const bar = {
    labels: Labels,
    datasets: [
      {
        label: "Energie Produite (kWh)",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: Data
      }
    ]
  };
  return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader align="center">
          <h4>
            <i className="fa fa-line-chart" />Energie Produite
          </h4>
        </CardHeader>
        <CardBody>
          <CardGroup>
            <Card>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar} />
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
                      <th>Energie produite (kWh)</th>
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
export default EnergieProduite;

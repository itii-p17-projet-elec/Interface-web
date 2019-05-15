import React from "react";
import { Line } from "react-chartjs-2";
import {
  Card,
  CardBody,
  CardHeader,
  CardGroup,
  CardTitle,
  Table,
  Progress
} from "reactstrap";


const ChargeBatterie = ({ datas }) => {
  let Labels = [];
  let Data = [];
  let LastIndex = -1;
  const dataList = datas.map(data => {
    Labels = [data.TimeStamp, ...Labels];
    Data = [data.Value, ...Data];
    LastIndex++;
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
        label: "Charge Batterie (%)",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(218,165,32,0.4)",
        borderColor: "rgba(218,165,32,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(218,165,32,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(218,165,32,1)",
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
            <i className="fa fa-battery-2" />
            Charge de la batterie
          </h4>
        </CardHeader>
        
        <CardBody>
        <Card>
          <CardBody>
            <CardTitle align="Center">
              Charge Batterie à {Labels[LastIndex]}
            </CardTitle>
            <Progress
              align="Center"
              animated
              value={Data[LastIndex]}
              max={100}
            >
              {Data[LastIndex]} %
            </Progress>
          </CardBody>
        </Card>
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
                      <th>Charge de la batterie (%)</th>
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
export default ChargeBatterie;

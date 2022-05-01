import Page from 'components/Page';
import React from 'react';
import { Line } from "react-chartjs-2";


import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from 'reactstrap';

class DataPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page
        className="DataPage"
        title="Data"
        breadcrumbs={[{ name: 'Data', active: true }]}
      >
        <Row>
          <Col className="align-self-center">
            <Card className="mb-3" style={{ width: '85%' }}>
              <CardHeader>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h3>Current Defect Statistics</h3>
                  </div>
                  <div>
                    <Button color="danger">View Details</Button>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="" style={{ width: '60%' }}>
                <Table className="table borderless" responsive striped>
                  <tbody>
                    {currentData.map(({ name, value }, index) => (
                      <tr key={index}>
                        <td className="align-middle text-left">{name}</td>
                        <td className="align-middle text-center text-danger font-weight-bold">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
            <Card className="mb-3" style={{ width: '85%' }}>
              <CardHeader>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h3>Production Forecasts</h3>
                  </div>
                  <div>
                    <Button color="danger">View Details</Button>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    className="mb-3 text-center"
                    style={{ width: '85%', alignSelf: 'center' }}
                  >
                    <h5>
                      Based on your production line data captured by
                      Electrospection, the following forecast details have been
                      estimated on your behalf to aid decision-making. Change
                      forecast time horizon and see advanced statistics by
                      clicking View Details. Forecasts reconfigure as new data
                      becomes available.
                    </h5>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{ display: 'flex', flex: 0.5, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                      {predictedData.map((item, index) => (
                        <div key={index} className="text-center">
                          <div className="font-weight-normal my-2">
                            <h4
                              style={{
                                display: 'inline-block',
                                verticalAlign: 'middle',
                              }}
                            >
                              {item.name}
                            </h4>
                            <br />
                            <h3 className="font-weight-bold text-danger mt-1">
                              {item.value}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{flex: 0.5}}>
                      <Card>
                        <CardBody>
                        <Line data={data} />
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

const currentData = [
  {
    name: 'Total Defect Count',
    value: '168',
  },
  {
    name: 'Most Common Defect',
    value: 'Nick',
  },
  {
    name: 'Least Common Defect',
    value: 'Pin Hole',
  },
  {
    name: 'Defect Rate',
    value: '0.9%',
  },
  {
    name: 'Number of Faulty Boards',
    value: '78',
  },
];

const predictedData = [
  {
    name: 'Forecast Period Defect Rate',
    value: '1.12%',
  },
  {
    name: 'Most Common Defect for Period',
    value: 'Nick',
  },
];

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Total Upcoming Defects",
        data: [62, 70, 76, 70, 60, 65],
        fill: false,
        borderColor: "red"
      }
    ]
  };

export default DataPage;

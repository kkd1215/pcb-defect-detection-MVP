import Page from 'components/Page';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from 'reactstrap';

class ReportsPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page
        className="ReportsPage"
        title="Reports"
        breadcrumbs={[{ name: 'Reports', active: true }]}
      >
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Defect report</CardHeader>
              <CardBody>
                <Table responsive hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Batch Name</th>
                      <th>Unit</th>
                      <th>Defect</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item.batchName}</td>
                        <td>{item.unit}</td>
                        <td>{item.defect}</td>
                        <Button style={{ padding: '0 3vw' }} color="danger">
                          view
                        </Button>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

const data = [
  {
    batchName: '1523-9823-2137',
    unit: '25',
    defect: 'Nick',
  },
  {
    batchName: '6242-7053-0151',
    unit: '39',
    defect: 'Excessive Copper',
  },
  {
    batchName: '8034-1623-1179',
    unit: '08',
    defect: 'Missing Hole',
  },
  {
    batchName: '9469-1253-5812',
    unit: '82',
    defect: 'Missing Hole',
  },
  {
    batchName: '2985-9172-1239',
    unit: '41',
    defect: 'Short circuits',
  },
  {
    batchName: '8987-9723-9993',
    unit: '51',
    defect: 'Nick',
  },
  {
    batchName: '0741-2712-8623',
    unit: '76',
    defect: 'Excessive Copper',
  },
  {
    batchName: '1523-8326-9238',
    unit: '60',
    defect: 'Short circuits',
  },
  {
    batchName: '7639-7053-8812',
    unit: '49',
    defect: 'Excessive Copper',
  },
  {
    batchName: '5402-9098-0812',
    unit: '97',
    defect: 'Missing Hole',
  },
  {
    batchName: '9812-8432-2137',
    unit: '03',
    defect: 'Nick',
  },
];

export default ReportsPage;

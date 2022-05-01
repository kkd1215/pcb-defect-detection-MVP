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
              <Table {...{ ['hover' || 'default']: true }} size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Batch Name</th>
                    <th>Unit</th>
                    <th>Defect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>1523-7053-2137</td>
                    <td>25</td>
                    <td>Nick</td>
                    <Button style={{padding: '0 3vw'}} color="danger">view</Button>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>6523-8250-3148</td>
                    <td>25</td>
                    <td>Spur</td>
                    <Button style={{padding: '0 3vw'}} color="danger">view</Button>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>0765-3694-5874</td>
                    <td>43</td>
                    <td>Missing Hole</td>
                    <Button style={{padding: '0 3vw'}} color="danger">view</Button>
                  </tr>
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
export default ReportsPage;

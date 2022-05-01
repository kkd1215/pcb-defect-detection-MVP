import Page from 'components/Page';
import React from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
} from 'reactstrap';

class InsightsPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page
        className="InsightsPage"
        title="Key Insights"
        breadcrumbs={[{ name: 'Key Insights', active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardBody>
                {data.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      width: '100%',
                      margin: '2% 0',
                    }}
                  >
                    <div
                      className="border border-dark rounded-left text-center"
                      style={{ flex: 0.2 }}
                    >
                      <h3 className='font-weight-normal my-4'>
                        <span
                          style={{
                            display: 'inline-block',
                            verticalAlign: 'middle',
                          }}
                        >
                          Batch #
                        </span>
                        <br />
                        <span className='font-weight-bold'>
                        {item.batch}
                        </span>
                      </h3>
                    </div>
                    <div
                      className="border border-dark rounded-right text-center"
                      style={{ flex: 0.8 }}
                    >
                      <h4 lassName=''>
                        {`Insights - Possible Cause & Fix`}
                      </h4>
                      <h5 className='text-danger mt-3'>
                        {item.insight}
                      </h5>
                    </div>
                  </div>
                ))}
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
    batch: '47',
    insight: `Unusually high number of open circuits. This may be due to overheating. Check for erroneous actions in the heating process of joints and ensure adequate heat levels are maintained.`,
  },
  {
    batch: '15',
    insight: `The presence of pin holes and nicks means there is likely excessive atmospheric moisture pressure. Ensure boards aren't placed in an environment were pressure exceeds resistance of the boards.`,
  },
  {
    batch: '87',
    insight: `Unusually high number of wrong sized holes. Test hole-punching equipment to ensure any defects in the equipment don't exist.`,
  },
];
export default InsightsPage;

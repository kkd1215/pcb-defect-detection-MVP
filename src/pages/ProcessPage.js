import Page from 'components/Page';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

class ProcessPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page
        className="ProcessPage"
        title="Process"
        breadcrumbs={[{ name: 'Process', active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>Processing form</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={2}>
                      Batch Name
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="email"
                        name="batchname"
                        placeholder="Please enter a batch name"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="checkbox1" sm={2}>
                      Defects
                    </Label>
                    <Col sm={{ size: 10 }}>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" /> Missing hole
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" /> Nick
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" /> Spur
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" /> Short circuits
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleFile" sm={2}>
                      Upload zip
                    </Label>
                    <Col sm={10}>
                      <Input type="file" name="file" />
                      <FormText color="muted">
                        Please upload a zip less than 10Mb. The zip should only contain images (PNG, JPG, JPEG)
                      </FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 10 }}>
                      <Button>Submit</Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default ProcessPage;

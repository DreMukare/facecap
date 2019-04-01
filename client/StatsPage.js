import React from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Table
} from 'reactstrap';
import Chart from './PieChart';

function StatsPage({ match }) {
  const [state, set] = React.useState({
    student: {}
  });
  const setState = next => set(Object.assign({}, state, next));

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/students/${match.params.student_id}`)
      .then(response => response.json())
      .then(([student]) => setState({ student }));
  }, [match.params.student_id]);

  return (
    <React.Fragment>
      <Col sm="6">
        <Card>
          <CardImg top width="100%" />
          <CardBody>
            <h5 className="mb-4">Student details</h5>
            <CardTitle>
              <Table bordered>
                <thead />
                <tbody>
                  <tr>
                    <th scope="row">First name:</th>
                    <td>{state.student.first_name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Last name:</th>
                    <td>{state.student.last_name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Registration number:</th>
                    <td>{state.student.registration_number}</td>
                  </tr>
                </tbody>
              </Table>
            </CardTitle>
          </CardBody>
        </Card>
      </Col>
      <Col sm="5">
        <Card>
          <CardBody>
            <CardTitle>
              <h5>Total attendance pie chart</h5>
            </CardTitle>
            <CardText className="font-italic font-weight-lighter">
              Hint: Hover over pie chart for more details.
            </CardText>
            <Chart student_id={match.params.student_id} />
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
}

export default StatsPage;

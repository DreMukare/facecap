import React from 'react';
import Chart from './PieChart';

function StatsPage({ match }) {
  const [chartState, set] = React.useState({
    data: []
  });
  const setState = next => set(Object.assign({}, chartState, next));

  React.useEffect(() => {
    fetch(
      `http://localhost:3000/api/attendance?student_id=${
        match.params.student_id
      }`
    )
      .then(response => response.json())
      .then(data => setState({ data }));
  }, [match.params.student_id]);

  const [student = {}] = chartState.data;
  const data = [
    { name: 'Attended', value: student.total_hours },
    { name: 'Left', value: 60 - student.total_hours }
  ];

  return (
    <React.Fragment>
      <Chart data={data} />
    </React.Fragment>
  );
}

export default StatsPage;

import React from 'react';
import { Cell, PieChart, Pie, Tooltip } from 'recharts';

function Chart({ student_id }) {
  const colors = ['#00C49F', '#FFBB28', '#FF8042', '#0088FE'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const [state, set] = React.useState({
    attendance: {}
  });
  const setState = next => set(Object.assign({}, state, next));

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/attendance?student_id=${student_id}`)
      .then(response => response.json())
      .then(([attendance]) => setState({ attendance }));
  }, [student_id]);

  const data = [
    { name: 'Total hours attended', value: state.attendance.total_hours },
    { name: 'Total hours left', value: 60 - state.attendance.total_hours }
  ];

  return (
    <PieChart width={400} height={300}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={200}
        cy={150}
        outerRadius={100}
        fill="#8884d8"
        label={renderCustomizedLabel}
        labelLine={false}
      >
        {data.map(({ name }, index) => (
          <Cell key={`cell-${index}-${name}`} fill={colors[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default Chart;

import React from 'react';
import { Cell, PieChart, Pie, Tooltip } from 'recharts';

function Chart({ data }) {
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

  return (
    <PieChart width={500} height={500}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={100}
        cy={100}
        outerRadius={80}
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

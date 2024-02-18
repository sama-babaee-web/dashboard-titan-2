import React from 'react';
import {
  LineChart, Line, XAxis, Tooltip, CartesianGrid, YAxis,
} from 'recharts';

// Example data array
const data = [
  { name: 'Page A', uv:   4000, pv:   2400, amt:   2400 },
  { name: 'Page B', uv:   3000, pv:   1398, amt:   2210 },
  { name: 'Page C', uv:   2000, pv:   9800, amt:   2290 },
  // ... more data points
];

export default function Chart() {
  return (
    <LineChart width={600} height={300} data={data} margin={{ top:   5, right:   20, left:   10, bottom:   5 }}>
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId="left" />
      <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId="right" />
    </LineChart>
  );
}

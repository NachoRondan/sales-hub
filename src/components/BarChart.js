import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import Title from "../pages/dashboard/Title";
import { ResponsiveContainer } from "recharts";

const data = [
  {
    name: "MercadoLibre",
    saleshub: 4000,
    directa: 2400,
    amt: 2400
  },
  {
    name: "Facebook",
    saleshub: 3000,
    directa: 1398,
    amt: 2210
  },
  {
    name: "Instagram",
    directa: 2000,
    saleshub: 9800,
    amt: 2290
  },
  
];

export default function BarChartComponent() {
  return (

    <React.Fragment>
    <Title>Ventas por plataforma</Title>
    <ResponsiveContainer>
    <BarChart
      width={500}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="directa" fill="#8884aa" />
      <Bar dataKey="saleshub" fill="#ffcc00" />
    </BarChart>
    </ResponsiveContainer>
  </React.Fragment>
    
  );
}

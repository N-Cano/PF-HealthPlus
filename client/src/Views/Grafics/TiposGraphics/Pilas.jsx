import React from "react";

import {
  ResponsiveContainer,
  YAxis,
  XAxis,
  BarChart,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const data = [
  { name: "Jose", age: 10, weight: 50 },
  { name: "Karina", age: 20, weight: 80 },
  { name: "Claudio", age: 54, weight: 87 },
  { name: "Hernesto", age: 43, weight: 60 },
  { name: "Victor", age: 13, weight: 30 },
];

const Pilas = () => {
  return (
    <div className="w-5/5 ">
      <ResponsiveContainer aspect={2}>
        <BarChart
          data={data}
          width={500}
          height={300}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="4 1 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            wrapperStyle={{ lineHeight: "40px" }}
          />
          <Bar dataKey="weight" fill="#1abc9c" />
          <Bar dataKey="age" fill="#1ee3cf" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Pilas;

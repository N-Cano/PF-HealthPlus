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
  AreaChart,
  Area,
} from "recharts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../../redux/actions";

const data = [
  { name: "Jose", age: 10, weight: 50 },
  { name: "Karina", age: 20, weight: 80 },
  { name: "Claudio", age: 54, weight: 87 },
  { name: "Hernesto", age: 43, weight: 60 },
  { name: "Victor", age: 13, weight: 30 },
];

const StackedAreaCharts = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  return (
    <div className="w-5/5 ">
      <ResponsiveContainer aspect={2}>
        <AreaChart
          data={doctors}
          width={500}
          height={300}
          margin={{ top: 5, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray=" 3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="name"
            stackId="1"
            stroke="#8884d8"
            fill="#"
          />
          <Area
            type="monotone"
            dataKey="specialty"
            stackId="1"
            stroke="#82caed"
            fill="#fad3cf"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedAreaCharts;

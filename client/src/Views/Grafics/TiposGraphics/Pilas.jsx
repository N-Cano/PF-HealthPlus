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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/actions";

const data = [
  { name: "Jose", age: 10, weight: 50 },
  { name: "Karina", age: 20, weight: 80 },
  { name: "Claudio", age: 54, weight: 87 },
  { name: "Hernesto", age: 43, weight: 60 },
  { name: "Victor", age: 13, weight: 30 },
];

const Pilas = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className="w-5/5 ">
      <ResponsiveContainer aspect={2}>
        <BarChart
          data={users}
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
          <Bar dataKey="name" fill="#1abc9c" />
          <Bar dataKey="date" fill="#1ee3cf" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Pilas;

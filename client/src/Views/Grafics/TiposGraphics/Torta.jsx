import React from "react";
import { Link } from "react-router-dom";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  AreaChart,
  Area,
} from "recharts";
const data = [
  { name: "Jose", value: 3456 },
  { name: "maria", value: 6454 },
  { name: "fer", value: 1234 },
  { name: "clau", value: 3211 },
  { name: "pedra", value: 2533 },
];
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../../redux/actions";
const COLORS = ["#ce93d8", "#5c6bc0", "#b49ddb", "#4dd0e1", "#f48fb1"];

const Torta = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);
  return (
    <div className="w-5/5 ">
      <ResponsiveContainer aspect={2}>
        <PieChart>
          <Pie
            dataKey={"value"}
            data={data}
            innerRadius={60}
            outerRadius={85}
            fill="#82ca9d"
          >
            {data.map((entry, index) => (
              <Cell
                key={`Cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <Link to={"/dashboard"}>
        <button>To home</button>
      </Link>
    </div>
  );
};

export default Torta;

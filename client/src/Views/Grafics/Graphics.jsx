import React from "react";
import StackedAreaCharts from "./TiposGraphics/Area";
import Torta from "./TiposGraphics/Torta";
import NavBarDesp from "../../Components/NavBar/NavBarDesp";
import Pilas from "./TiposGraphics/Pilas";

const Graphics = () => {
  return (
    <div className="w-3/5 ">
      <NavBarDesp />
      <Pilas />
      <StackedAreaCharts />
      <Torta />
    </div>
  );
};

export default Graphics;

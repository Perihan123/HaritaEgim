import React from "react";
import Chart from "react-apexcharts";

const App = ({ datas }) => {
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Yüzde","Binde","Derece"],
    },
  };
  const series = [
    {
      name: "Değer ",
      data: [datas.yuzde,datas.binde,datas.derece],
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between items-center">
      <div className="p-3 px-5 shadow-2xl rounded-lg sm:w-full lg:w-2/3 ">
        <h2 className="text-center text-red-500 mb-4">Değerler</h2>
        <p className="font-semibold text-center" >Yüzde ifadesiyle sonuç : % {datas.yuzde}</p>
        <p className="font-semibold text-center" >Binde ifadesiyle sonuç : % {datas.binde}</p>
        <p className="font-semibold text-center" >Derece ifadesiyle sonuç : % {datas.derece}°</p>
      </div>
      <div className="sm:w-full lg:w-2/3">
        <Chart options={options} series={series} type="bar" />
      </div>
    </div>
  );
};

export default App;

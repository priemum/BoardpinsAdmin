


import Chart from "react-apexcharts";
export const ProfitEvolution = ({ chartData }) => {
    return (
      <div className="shadow-custom rounded-lg p-4 mb-3 font-poppins">
        <h1>Profit Evolution</h1>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={250}
        />
  
        <button className="bg-[#CCCCCCA8] w-full rounded text-[#1E1E1E] py-2 text-sm">
          Add new category{" "}
        </button>
      </div>
    );
  };
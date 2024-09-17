import ChartDashbard from "./chartDahboard";
export const AnalyticsChart = () => {
    return (
      <div className="shadow-custom p-4 rounded-lg">
        <div className="flex items-center gap-4 py-3">
          <h1 className=" font-bold text-sm">Users</h1>
        </div>
        <div>
          <ChartDashbard />
        </div>
      </div>
    );
  };
  
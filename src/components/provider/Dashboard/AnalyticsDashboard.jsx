import React, { useState } from "react";

import { OverviewCard } from "./OverviewCard";
import { ProjectCard } from "./ProjectCard";
import { MonthlyTargetandRevenues } from "./MonthlyTargetandRevenues";
import { ServicesproviderPendingApproval } from "./ServicesproviderPendingApproval";
import { AnalyticsChart } from "./AnalyticsChart";
import { ProductionGroups } from "./ProductionGroups";
import { MostPinned } from "./MostPinned";
import { ProfitEvolution } from "./ProfitEvolution";
import { Categoies } from "./Categoies";

function AnalyticsDashboard({
  projectItemsGroups,
  projectItems,
  merchantItems,
  chartData,
  DataCategoies,
  DataPinned,
  pendingApprovaldata,
}) {
  return (
    <div className="p-4 py-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-6 pb-3 col-span-12">
          <ProjectCard items={projectItems} />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <AnalyticsChart />
          <OverviewCard title="Plans Analytics " items={merchantItems} />
        </div>
      </div>
      <MonthlyTargetandRevenues
        header={"Monthly Target and Revenues"}
        start_value={0}
        end_value={100}
      />

      {projectItemsGroups ? (
        <ProductionGroups items={projectItemsGroups} />
      ) : (
        ""
      )}

      {pendingApprovaldata ? (
        <ServicesproviderPendingApproval
          items={pendingApprovaldata}
          title="Services provider Pending Approval "
        />
      ) : (
        ""
      )}
      <div className=" grid lg:grid-cols-3 grid-cols-1 gap-3">
        <div>
          <Categoies DataCategoies={DataCategoies} />
        </div>
        <div>
          <ProfitEvolution chartData={chartData} />
        </div>
        <div>
          <MostPinned
            DataPinned={DataPinned}
            title={"Most Pinned Sevices Provider "}
          />
        </div>
      </div>
    </div>
  );
}

export default AnalyticsDashboard;

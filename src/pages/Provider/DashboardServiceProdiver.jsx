import React, { useState } from "react";
import AnalyticsDashboard from "../../components/provider/Dashboard/AnalyticsDashboard";

import pic from "../../assets/icons/Frame 26944.png";
import { AiFillAppstore } from "react-icons/ai";
import { BsPersonVcard } from "react-icons/bs";
import { MdGroups, MdPerson } from "react-icons/md";

function DashboardServiceProdiver() {
  const merchantItems = [
    { image: pic, value: "200", description: "connected merchants" },
    { image: pic, value: "200", description: "pending acceptance connect" },
    { image: pic, value: "200", description: "connected merchants" },
  ];

  const projectItems = [
    {
      image: pic,
      value: "5",
      description: "Categoies",
      color: "#FC7636",
      icon: <AiFillAppstore />,
      bgColor: "#FF79391A",
    },
    {
      image: pic,
      value: "10",
      description: "Total",
      color: "#FFB7BF",
      icon: <MdPerson />,
      bgColor: "#FFA6B01A",
    },

    {
      image: pic,
      value: "20",
      description: "To-Do Taskss",
      color: "#B2B3FE",
      icon: <MdGroups />,
      bgColor: "#6AA2F31A",
    },

    {
      image: pic,
      value: "12",
      description: "Completed projects",
      color: "#52CD8F",
      icon: <BsPersonVcard />,
      bgColor: "#52CD8F30",
    },
    {
      image: pic,
      value: "12",
      description: "Completed projects",
      color: "#52CD8F",
      icon: <BsPersonVcard />,
      bgColor: "#52CD8F30",
    },
  ];

  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["May", "Jun", "Jul", "Aug", "Sep"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 90, 50],
        color: "#6161FF",
      },
    ],
  });

  const DataCategoies = [
    {
      title: "Category Name1",
      subTitle: "12 services Provider ",
    },
    {
      title: "Category Name2",
      subTitle: "12 services Provider ",
    },
    {
      title: "Category Name3",
      subTitle: "12 services Provider ",
    },
    {
      title: "Category Name4",
      subTitle: "12 services Provider ",
    },
  ];
  const DataPinned = [
    {
      Name: "Marchant Name",
      imgSrc: "https://placehold.jp/150x150.png",
      Review: 150,
      rating: "4.5",
      saved: 200,
      TimeAdd: "16h ago",
    },
    {
      Name: "Marchant Name",
      imgSrc: "https://placehold.jp/150x150.png",
      Review: 150,
      rating: "4.5",
      saved: 200,
      TimeAdd: "16h ago",
    },
    {
      Name: "Marchant Name",
      imgSrc: "https://placehold.jp/150x150.png",
      Review: 150,
      rating: "4.5",
      saved: 200,
      TimeAdd: "16h ago",
    },
  ];

  const pendingApprovaldata = [
    {
      Name: "Marchant Name",
      description: "any description here",
      imgSrc: "https://placehold.jp/150x150.png",
      TimeAdd: "16h ago",
    },
    {
      Name: "Marchant Name",
      description: "any description here",
      imgSrc: "https://placehold.jp/150x150.png",
      TimeAdd: "16h ago",
    },
    

  ];

  return (
    <div>
      {" "}
      <div className=" bg-white rounded-xl lg:p-4 md:p-4 p-0 font-poppins">
        <main className=" py-4">
          <AnalyticsDashboard
            merchantItems={merchantItems}
            DataCategoies={DataCategoies}
            chartData={chartData}
            projectItems={projectItems}
            DataPinned={DataPinned}
            pendingApprovaldata={pendingApprovaldata}
          />
        </main>
      </div>
    </div>
  );
}

export default DashboardServiceProdiver;

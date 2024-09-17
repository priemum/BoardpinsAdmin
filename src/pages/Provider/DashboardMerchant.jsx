import React, { useState } from 'react'
import AnalyticsDashboard from '../../components/provider/Dashboard/AnalyticsDashboard'
import pic from '../../assets/icons/Frame 26944.png';
import { AiFillAppstore } from 'react-icons/ai';
import { BsPersonVcard } from 'react-icons/bs';
import { MdGroups, MdPerson } from 'react-icons/md';

function DashboardMerchant() {
    const merchantItems = [
        { image: pic, value: '200', description: 'Free plan' },
        { image: pic, value: '200', description: 'Standerd' },
        { image: pic, value: '200', description: 'Premium' },
      ];
    
      const projectItems = [
    
        { image: pic, value: "30", description: "Sevices Provider", color: "#FFB7BF" ,icon: <MdPerson /> ,bgColor:"#FFA6B01A" },
        {
            image: pic,
            value: "200",
            description: "Categoies",
            color: "#FC7636",
            icon:<AiFillAppstore/>,
            bgColor:"#FF79391A"
          },
        { image: pic, value: "20", description: "Total Signup Users", color: "#B2B3FE" ,icon:<MdGroups /> ,bgColor:"#6AA2F31A" },
    
        {
          image: pic,
          value: "12",
          description: "Running Projects",
          color: "#52CD8F",
          icon:<BsPersonVcard/>,
          bgColor:"#52CD8F30",
        },
        {
          image: pic,
          value: "12",
          description: "Finished Projects",
          color: "#52CD8F",
          icon:<BsPersonVcard/>,
          bgColor:"#52CD8F30",
        },
      ];
      const projectItemsGroups = [
        { image: pic, value: '200', description: 'Total' },
        { image: pic, value: '200', description: 'In-progress' },
        { image: pic, value: '200', description: 'Completed' },
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
    
  return (
    <div> <div className=" bg-white rounded-xl lg:p-4 md:p-2 p-0 font-poppins">
    

    <main className=" ">
    <AnalyticsDashboard projectItemsGroups={projectItemsGroups} merchantItems={merchantItems}  projectItems={projectItems} DataCategoies={DataCategoies} chartData={chartData} DataPinned={DataPinned} />
    
    </main>
    
    </div></div>
  )
}

export default DashboardMerchant
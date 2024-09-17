import { Outlet } from "react-router-dom"
import AnalyticsDashboard from "../../components/provider/Dashboard/AnalyticsDashboard"
import HeaderDashboard from "../../components/provider/Dashboard/HeaderDashboard"

function Dashboard() {
  return (
    <div className=" bg-white rounded-xl lg:p-4 md:p-4  py-6 p-0 font-poppins">
    
    <HeaderDashboard/>
   <Outlet/>
    </div>
  )
}

export default Dashboard
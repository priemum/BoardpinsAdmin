import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./utils/LayoutDashboard";
import Dashboard from "./pages/Provider/Dashboard";

import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import ForgetPassword from "./pages/Auth/ForgotPassword";
import LayoutAuth from "./utils/LayoutAuth";
import NewPassword from "./pages/Auth/NewPassword";
import VerifyMail from "./pages/Auth/VerfiyMail";
import RecoverySuccess from "./pages/Auth/RecoverySuccess";
import DashboardMerchant from "./pages/Provider/DashboardMerchant";
import DashboardServiceProdiver from "./pages/Provider/DashboardServiceProdiver";
import Categories from "./pages/Provider/Categories";
import SevicesProvider from "./pages/Provider/SevicesProvider";
import Users from "./pages/Provider/Users";         
import PaymentHistory from "./pages/Provider/PaymentHistory";
import Subscriptions from "./pages/Provider/Subscriptions";
import Promocodes from "./pages/Provider/Promocodes";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutAuth />}>
          <Route path="/recoverysuccess" element={<RecoverySuccess />} />
          <Route path="/verifymail" element={<VerifyMail />} />
          <Route path="/NewPassword" element={<NewPassword />} />
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Route>

       
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} >
          <Route index  element={<DashboardMerchant />}/>
        
          <Route path="merchant"  element={<DashboardMerchant />}/>
          <Route path="serviceProvider"  element={<DashboardServiceProdiver />}/>
          </Route>
          <Route path="/categories"  element={<Categories/>}/>
          <Route path="/sevicesProvider"  element={<SevicesProvider/>}/>
          <Route path="/users"  element={<Users/>}/>
          <Route path="/paymenthistory"  element={<PaymentHistory/>}/>
          <Route path="/promocodes"  element={<Promocodes/>}/>
          <Route path="/subscriptions"  element={<Subscriptions/>}/>
         
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

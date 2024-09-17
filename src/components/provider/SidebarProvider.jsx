import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IoMdExit } from "react-icons/io";
import { Icon } from "@iconify/react";
import Logo from "../../assets/images/Logo.png";

const SidebarProvider = ({ handleIsopen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dropdowns, setDropdowns] = useState({});

  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleItemClick = (id) => setSelectedItem(id);

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => {
      const updatedDropdowns = Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === dropdown ? !prev[key] : false;
        return acc;
      }, {});
      return updatedDropdowns;
    });
  };

  const menuItems = [
    { id: 1, icon: "solar:chart-square-outline", text: "DashBoard Page", path: "dashboard" },
    {
      id: 2,
      icon: "octicon:apps-24",
      text: "Categories",
      path: "Categories",
    },
    {
      id: 3,
      icon: "bi:person-vcard",
      text: "Sevices Provider",
      path: "/sevicesProvider",
    },
    {
      id: 4,
      icon: "mdi:person-group",
      text: "Users",
      path: "/users",
  
    },
   
    {
      id: 5,
      icon: "bxs:offer",
      text: "Promocodes",
      path: "/promocodes",
    },
    {
      id: 6,
      icon: "hugeicons:analytics-up",
      text: "Subscriptions ",
      path: "/subscriptions",
    },
    {
      id: 7,
      icon: "hugeicons:analytics-up",
      text: "Payment history ",
      path: "/paymenthistory",
    },

  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed ${isOpen ? "top-[1%]" : "top-[3%]"} ${
          isOpen ? "left-[48%]" : "left-[5%]"
        } p-2 rounded-lg z-50 md:hidden bg-white`}
      >
        {isOpen ? <IoMdExit /> : <MenuIcon color="#000" />}
      </button>

      <div
        className={`fixed inset-x-0 font-poppins px-4 h-full left-0 md:bg-transparent bg-white text-white w-72 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:static md:translate-x-0 py-4 top-0 md:py-0 md:h-full md:w-[19%]`}
      >
        <div className="flex justify-between items-center w-full">
          <img src={Logo} className="w-[200px] pt-4" alt="Logo" />
        </div>

        <ul
          className="font-popines flex flex-col text-sm  bg-white h-full rounded-xl  gap-4 font-[500] max-h-[90vh] overflow-y-auto py-4 px-1 mt-7"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4B5563 ##1E1E1EBF",
          }}
        >
          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className={`flex flex-col gap-1  px-2 py-2  ${
                selectedItem === item.id
                  ? "bg-white shadow-custom2 rounded-lg py-3  text-[#6161FF]"
                  : " text-dark"
              }`}
              onClick={() => {
                handleItemClick(item.id);
                if (item.onClick) item.onClick(); // Trigger onClick if available
              }}
            >
              <div
                className="flex items-center  gap-3 cursor-pointer"
                onClick={() => item.dropdown && toggleDropdown(item.dropdown)}
              >
                <div className="flex-grow flex items-center w-full gap-3">
                  {item.icon && (
                    <Icon icon={item.icon} width="25px" height="25px" />
                  )}
                  {item.text}
                </div>
                {item.dropdown && ""}
              </div>
              {item.subItems && dropdowns[item.dropdown] && (
                <ul className=" mt-2 space-y-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      to={subItem.path}
                      key={subIndex}
                      className="flex items-center gap-2 ml-2 py-1 justify-start"
                    >
                      {subItem.icon && (
                        <Icon icon={subItem.icon} width="25px" height="25px" />
                      )}
                      <span className="text-sm ">{subItem.text}</span>
                    </Link>
                  ))}
                </ul>
              )}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidebarProvider;

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Fragment } from "react";
import { Switch as ToggleSwitch } from "@/components/ui/switch";
import { useTheme } from "./ThemeProvider";
import logo from "./img/mouth-watering.png";
import logo2 from "./img/wolf-head.png";

const NavBar = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const menus = [
    {
      label: `Home`,
      to: "/",
    },
    {
      label: `Quiz`,
      to: "/quiz",
    },
  ];

  const menus2 = [
    {
      label: `Score`,
      to: "/score",
    },
    {
      label: `Evaluate the Course`,
      to: "/evaluate",
    },
  ];

  const ThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="w-full ">
      <nav className="bg-bgligt3 shadow-[0px_0px_13px_3px_black] -m-5 mx-2 rounded-lg bg-cover my-4 border-2 border-red-950 dark:bg-bgdark4 dark:border-2  dark:border-lime-500  dark:shadow-[0px_0px_15px_8px_#84CC16] ">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex justify-between items-center w-[100vw]">
              <div> </div>
              {menus.map((menu) => (
                <Fragment key={menu.to}>
                  <Link
                    to={menu.to}
                    className={`text-white text-[10px] items-center w-full text-center font-bold px-3 rounded-md text-sm  hover:bg-white hover:text-red-400 hover:font-extrabold mx-6 hover:dark:bg-lime-500 hover:dark:text-white hover:dark:border-white hover:dark:shadow-[0px_0px_15px_3px_#D946EF] ${
                      location.pathname === menu.to
                        ? "bg-white text-yellow-700 border-2 border-yellow-400 w-[100%] dark:bg-white dark:border-2 dark:border-lime-500 dark:text-lime-500 dark:shadow-[0px_0px_15px_3px_#84CC16]"
                        : ""
                    }`}
                  >
                    {menu.label}
                  </Link>
                </Fragment>
              ))}
              <div className="relative border-black bg-red-950   shadow-[0px_0px_14px_5px_white] dark:bg-fuchsia-950 rounded-full border-2 dark:border-lime-500 dark:shadow-[0px_0px_15px_3px_#D946EF]">
                <img
                  className="w-[500px] p-2 px-3 pt-4 visible dark:invisible "
                  src={logo}
                  alt=""
                />
                <img
                  className="absolute w-[500px] p-2 top-0 px-3 pt-3 invisible dark:visible "
                  src={logo2}
                  alt=""
                />
              </div>
              {menus2.map((menu) => (
                <Fragment key={menu.to}>
                  <Link
                    to={menu.to}
                    className={`text-white text-[10px] items-center w-full text-center font-bold px-3 rounded-md text-sm  hover:bg-white hover:text-red-400 hover:font-extrabold mx-6 hover:dark:bg-lime-500 hover:dark:text-white hover:dark:border-white hover:dark:shadow-[0px_0px_15px_3px_#D946EF] ${
                      location.pathname === menu.to
                        ? "bg-white text-yellow-700 border-2 border-yellow-400 w-[100%] dark:bg-white dark:text-lime-500 dark:shadow-[0px_0px_15px_3px_#84CC16]"
                        : ""
                    }`}
                  >
                    {menu.label}
                  </Link>
                </Fragment>
              ))}
              <div className="ml-4">
                <ToggleSwitch
                  checked={theme === "dark"}
                  onCheckedChange={ThemeToggle}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

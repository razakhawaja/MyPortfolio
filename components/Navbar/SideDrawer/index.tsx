import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import routes, { navRoutes } from "../../../constants/routes";
import DarkModeToggle from "../../DarkModeToggle";
import { Logo } from "../../../utils/icons";

interface ToggleProps {
  click: any;
  show: boolean;
}

const SideDrawer = (props: ToggleProps) => {
  const router = useRouter();

  React.useEffect(() => {
    props.click();
  }, [router.pathname]);

  return (
    <div
      className={`sm:hidden h-full bg-white  shadow-lg fixed top-0 w-8/12 max-w-sm z-50 transition duration-500 ease-in-out transform ${
        props.show ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Link href={routes.HOME}>
        <div className="text-black p-4 h-20 border-b border-gray-300  flex justify-center">
          <Logo className="tailwind-hidden sm:flex w-24 ml-4 mt-4 text-primary" />

          {/* <DarkModeToggle className="flex items-center pl-4" /> */}
        </div>
      </Link>
      <div>
        {navRoutes.map((navRoute: { name: string; path: string }, index) => (
          <Link href={navRoute.path} key={index}>
            <div
              className={`m-2 px-2 py-4 hover:bg-gray-100 :bg-dark-60 rounded-lg ${
                router.pathname === navRoute.path
                  ? "text-primary font-semibold bg-gray-100 "
                  : ""
              }`}
            >
              {navRoute.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideDrawer;

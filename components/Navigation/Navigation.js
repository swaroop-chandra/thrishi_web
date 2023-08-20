import styles from "../../styles/Navigation.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { MenuItems } from "./NavContent";
import LetsTalk from "../common/buttons/LetsTalk";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Navigation() {
  const [navClick, setNavClick] = useState("");
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(true);
  const router = useRouter();
  const route_data = router.pathname.slice(1).split("_").join(" ");
  console.log();
  // document.title = `Thishi | ${router.pathname}`;

  return (
    <div
      className="fixed flex flex-row bg-blend-multiply drop-shadow-md items-center p z-10"
      style={{ background: "#F7F7F7", height: "75px", width: "100vw" }}
    >
      <div className="grow ml-5">
        <img
          src={"/images/nav/brandlogo.png"}
          alt="logo"
          width={80}
          height={60}
        />
      </div>
      <ul className="hidden lg:flex basis-1/2 flex justify-around py-2 items-center">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={`/${item.url}`}
                onClick={() => {
                  setNavClick(index);
                }}
                style={
                  MenuItems.findIndex((e) => e.url == router.pathname) ==
                    index || navClick == index
                    ? {
                        fontSize: "18px",
                        color: "black",
                      }
                    : { fontSize: "16px", opacity: "0.5" }
                }
              >
                <button
                  className={`transition p-3 ease-in-out delay-150  duration-300  `}
                >
                  {item.title}
                </button>
              </Link>
            </li>
          );
        })}
        <li>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            type="button"
            onClick={() => setDropdown(!dropdown)}
          >
            Services
          </button>
          <div
            id="dropdown"
            className={`absolute mt-5 z-10 bg-neutral-50 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-neutral-50 ${
              dropdown && "hidden"
            }`}
          >
            <ul
              className="py-2 text-sm text-black dark:text-black"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="event_management"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Event Management
                </a>
              </li>
              <li>
                <a
                  href="digital_marketing"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href="/lets_talk">
            <button
              className="transition p-3 ease-in-out delay-150 text-slate-600 hover:scale-110 duration-300 active:scale-100 active:text-black hover:text-white text-white bg-black text-sm rounded-full flex flex-row items-center justify-self-center active:text-rose-700 active:bg-rose-700"
              style={{ width: "145px", height: "32px", paddingLeft: "20px" }}
            >
              Let’s Talk
              <span className="ml-2">
                <img
                  src="/images/nav/right.png"
                  alt="right"
                  width={30}
                  height={20}
                />
              </span>
            </button>
          </Link>
        </li>
      </ul>
      <div className="lg:hidden flex mr-4">
        <img
          src="/images/nav/menu.svg"
          alt="menu"
          width={35}
          height={35}
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {toggle && (
        <div
          className="lg:hidden fixed top-0 right-0 w-48 h-100 p-6"
          style={{ height: "100vh", background: "#fff" }}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-base text-slate-600">Menu</h3>

            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
              onClick={() => setToggle(!toggle)}
            >
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
            </svg>
          </div>
          <ul className="py-6 items-center" onClick={() => setToggle(!toggle)}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={`/${item.url}`}
                    onClick={() => {
                      setNavClick(index);
                    }}
                    style={
                      route_data == item.title.toLowerCase() ??
                      "home" == item.title.toLowerCase()
                        ? {
                            fontSize: "18px",
                            color: "black",
                          }
                        : { fontSize: "16px", opacity: "0.5" }
                    }
                  >
                    <button
                      className={`transition p-3 ease-in-out delay-150  duration-300  `}
                    >
                      {console.log(route_data)}
                      {item.title}
                    </button>
                  </Link>
                </li>
              );
            })}
            <li className="pt-4">
              <a
                href="event_management"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black"
                onClick={() => setDropdown(!dropdown)}
                style={
                  route_data == "event management"
                    ? {
                        fontSize: "18px",
                        color: "black",
                      }
                    : { fontSize: "16px", opacity: "0.5" }
                }
              >
                Event Management
              </a>
            </li>
            <li className="pt-4">
              <a
                href="digital_marketing"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black"
                onClick={() => setDropdown(!dropdown)}
                style={
                  route_data == "digital marketing"
                    ? {
                        fontSize: "18px",
                        color: "black",
                      }
                    : { fontSize: "16px", opacity: "0.5" }
                }
              >
                Digital Marketing
              </a>
            </li>
            <li className="pt-4">
              <Link href="/lets_talk">
                <LetsTalk width={"145px"} height={"32px"} text={"Let's Talk"} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

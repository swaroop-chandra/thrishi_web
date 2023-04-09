import styles from "../../styles/Navigation.module.css";
import Link from "next/Link";
import { useState } from "react";
import { useRouter } from "next/router";
import { MenuItems } from "./NavContent";
import LetsTalk from "../common/buttons/LetsTalk";

export default function Navigation() {
  const [navClick, setNavClick] = useState("");
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  console.log(navClick);
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
          <Link href="/lets_talk">
            <button
              className="transition p-3 ease-in-out delay-150 text-slate-600 hover:scale-110 duration-300 active:scale-100 active:text-black hover:text-black text-base bg-neutral-200 text-sm rounded flex flex-row items-center justify-self-center active:text-rose-700 active:bg-rose-700"
              style={{ width: "145px", height: "32px" }}
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

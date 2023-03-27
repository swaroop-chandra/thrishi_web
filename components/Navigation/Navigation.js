import styles from "../../styles/Navigation.module.css";
import Link from "next/Link";
import { useState } from "react";
import { useRouter } from "next/router";
import { MenuItems } from "./NavContent";

export default function Navigation() {
  const [navClick, setNavClick] = useState("");
  const router = useRouter();
  console.log(navClick);
  // document.title = `Thishi | ${router.pathname}`;

  return (
    <div
      className="flex flex-row bg-blend-multiply drop-shadow-md items-center p"
      style={{ background: "#F7F7F7", height: "75px" }}
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
              className="transition p-3 ease-in-out delay-150 text-slate-600 hover:scale-110 duration-300 active:scale-100 active:text-black hover:text-black text-base bg-neutral-100 text-sm rounded flex flex-row items-center justify-self-center active:text-rose-700 active:bg-rose-700"
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
        <img src="/images/nav/menu.svg" alt="menu" width={35} height={35} />
      </div>
    </div>
  );
}

import styles from "../../styles/Navigation.module.css";
import Link from "next/Link";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const urlData = useLocation();
  // const [first, setfirst] = useState(second);

  console.log(urlData, "response");
  return (
    <div className="flex flex-row bg-gradient-to-r from-black to-slate-100 bg-blend-multiply drop-shadow-md ">
      <div className="grow"></div>
      <div className="basis-1/4 flex justify-around py-2">
        <Link href="/">
          <a>
            <div className="transition ease-in-out delay-150 text-slate-600 hover:scale-110 duration-300 active:scale-100 active:text-black hover:text-black">
              Home
            </div>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <div className="transition ease-in-out delay-150 text-slate-600 hover:scale-110 duration-300 active:scale-100 active:text-black hover:text-black">
              About
            </div>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <div className="transition ease-in-out delay-150 text-slate-600 hover:scale-110 duration-300 active:scale-100 active:text-black hover:text-black">
              Contact
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

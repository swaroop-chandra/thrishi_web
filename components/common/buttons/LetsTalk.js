import Link from "next/Link";
import { useRouter } from "next/router";
import React from "react";

function LetsTalk(props) {
  const router = useRouter();

  return (
    <Link href={`/${props?.link}`}>
      <button
        className=" p-3 text-gray-50  text-base bg-black text-sm rounded-full cursor-pointer
      flex flex-row items-center justify-self-center 	"
        style={{
          width: props?.width,
          height: props?.height,
          fontSize: props?.size,
          paddingLeft: "20px",
        }}
      >
        {props.text}
        <span className="ml-2">
          <img src="/images/nav/right.png" alt="right" width={25} height={15} />
        </span>
      </button>
    </Link>
  );
}

export default LetsTalk;

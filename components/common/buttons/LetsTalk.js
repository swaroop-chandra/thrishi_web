import React from "react";

function LetsTalk(props) {
  return (
    <button
      className="transition p-3 ease-in-out delay-150 text-slate-600 hover:scale-110 duration-300 active:scale-100 active:text-black hover:text-black text-base bg-neutral-200 text-sm rounded flex flex-row items-center justify-self-center active:text-rose-700 active:bg-rose-700"
      style={{
        width: props?.width,
        height: props?.height,
        fontSize: props?.size,
      }}
    >
      {props.text}
      <span className="ml-2">
        <img src="/images/nav/right.png" alt="right" width={30} height={20} />
      </span>
    </button>
  );
}

export default LetsTalk;

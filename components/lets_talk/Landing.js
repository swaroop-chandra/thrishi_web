import React, { useState } from "react";
import LetsTalk from "../common/buttons/LetsTalk";

function Landing() {
  const [object, setObject] = useState({});

  const SubmitHandle = (e) => {
    e.preventDefault();
    console.log(object, "asdfghgtrew");
  };

  return (
    <div className="flex lg:flex-row flex-col h-[46rem] lg:min-h-screen lg:mt-0 mt-48">
      <div className="lg:w-1/2 w-full  h-[22rem] lg:h-screen flex items-center justify-center m-auto">
        <div className="mb-8  lg:mb-0 w-3/4 md:w-4/5 lg:w-3/4 ">
          <form onSubmit={SubmitHandle}>
            <h1 className="text-sm lg:text-lg md:text-base leading-10 lg:mb-6 text-gray-400">
              Let’s Talk
            </h1>
            <h1 className="text-2xl lg:text-5xl md:text-3xl leading-10 lg:mb-10 mb-4">
              Hi, tell us about your <br /> request
            </h1>
            <h1 className="text-lg lg:text-3xl md:text-2xl leading-10 lg:mb-10 mb-4">
              Fill out the form below
            </h1>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                object.name = e.target.value;
                setObject({ ...object });
              }}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
       focus:invalid:ring-pink-500 mb-8 h-[55px] capitalize
    "
            />
            <input
              type="email"
              placeholder="Email Id"
              onChange={(e) => {
                object.email = e.target.value;
                setObject({ ...object });
              }}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
       focus:invalid:ring-pink-500 mb-8 h-[55px] capitalize
    "
            />
            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e) => {
                object.phone = e.target.value;
                setObject({ ...object });
              }}
              minLength={10}
              maxLength={10}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:ring-pink-500 mb-8 h-[55px] capitalize
    "
            />
            <textarea
              rows={4}
              type="text"
              placeholder="Write your thoughts here..."
              onChange={(e) => {
                object.message = e.target.value;
                setObject({ ...object });
              }}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
       focus:invalid:ring-pink-500 mb-8  capitalize
    "
            />
            <button
              className="transition p-3 ease-in-out delay-150 text-slate-600 hover:scale-110 duration-300 active:scale-100 active:text-black hover:text-black text-base bg-neutral-200 text-sm rounded flex flex-row items-center justify-self-center active:text-rose-700 active:bg-rose-700 justify-center"
              style={{
                width: "150px",
                height: "50px",
                fontSize: "18px",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="lg:w-1/2 w-full  h-[22rem] lg:h-screem flex  items-center justify-center  w-3/4 md:w-2/3 m-auto mt-40">
        <img
          src="/images/home/boxgrey.png"
          alt="grey"
          className="p-10 lg:block"
        />
      </div>
    </div>
  );
}

export default Landing;

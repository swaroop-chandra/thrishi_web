import React from "react";

function ClientHome() {
  return (
    <div>
      <h1 className="text-4xl h-40 flex items-end justify-center p-10">
        Our client includes
      </h1>
      <div style={{ contain: "content" }}>
        <div
          className="lg:mt-8 flex"
          style={{ position: "relative", zIndex: "-3" }}
        >
          <img
            src="/images/home/logos.png"
            alt="logo"
            className="p-7 w-52"
            style={{ position: "relative", zIndex: "-3" }}
          />
          <img
            src="/images/home/logos.png"
            alt="logo"
            className="p-7 w-52"
            style={{ position: "relative", zIndex: "-3" }}
          />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
        </div>
        <div
          className=" ml-12 flex"
          style={{ position: "relative", zIndex: "-3" }}
        >
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
        </div>
        <div className=" flex" style={{ position: "relative", zIndex: "-3" }}>
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
          <img src="/images/home/logos.png" alt="logo" className="p-7 w-52" />
        </div>
      </div>
    </div>
  );
}

export default ClientHome;

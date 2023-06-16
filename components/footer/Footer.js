import React, { useState } from "react";
import bg from "../../public/images/footer/background.png";

function Footer() {
  const [email, setEmail] = useState("");
  return (
    <div
      className=" w-full  lg:h-[40rem] mt-10 pt-20 pb-10 lg:px-20 px-10 flex flex-col justify-between text-white"
      style={{
        backgroundImage: `url(${bg.src})`,
        wordSpacing: "12px",
        position: "sticky",
        zIndex: "-3",
        backgroundPosition: "top",
      }}
    >
      <div className="grid lg:grid-cols-2 gap-4 ">
        <div>
          <div className="font-extralight text-md mt-10 "> Get in touch</div>
          <h3 className="font-semibold lg:text-4xl text-xl lg:mt-6 mt-2">
            thishi@gmail.com
          </h3>
          <h3 className="font-semibold lg:text-4xl text-xl lg:mt-6 mt-2 ">
            +91-9826345763
          </h3>
          <h3 className="font-semibold lg:text-4xl text-xl lg:mt-6 mt-2">
            Address
          </h3>
          <div className="font-extralight lg:text-base lg:mt-3 text-sm mt-4 lg:mt-6">
            {" "}
            Explore
          </div>
          <ul className="flex mt-4 gap-8 lg:text-base text-sm font-extralight lg:my-8 mb-6">
            <li>About-us</li>
            <li>Services</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <div className="flex flex-col mt-14">
          <h1 className="lg:text-5xl text-3xl font-thin mb-6">
            Get our latest <br />
            updates
          </h1>

          <form className="flex">
            <input
              type="text"
              placeholder="Your Email"
              className=" bg-transparent text-black lg:w-6/12 w-full text-white"
              style={{
                borderBottom: "2px solid white",
                color: "black",
              }}
              onChange={(e) => console.log(e.target.value)}
            />

            <img
              src="/images/footer/submit.png"
              alt="submit"
              width={40}
              height={40}
            />
          </form>
        </div>
      </div>

      <div className="lg:flex justify-between mt-4 border-t-4 border-white pt-6">
        <div className="lg:flex text-xs lg:w-6/12">
          <h5 className="lg:w-3/12">Privacy Policy</h5>{" "}
          <h5 className="mt-4 lg:m-0 ">Terms & Condition</h5>
        </div>
        <div className="lg:flex lg:m-0 mt-4 text-xs lg:w-1/2">
          <h5 className="lg:w-3/12"></h5>
          <h5 className="lg:w-4/12">See what we are upto</h5>
          <div className="flex w-5/12 justify-between lg:m-0 mt-4 ">
            {" "}
            <div className="bg-white w-5 h-5 rounded-full text-black">f</div>
            <div className="bg-white w-5 h-5 rounded-full text-black">g</div>
            <div className="bg-white w-5 h-5 rounded-full text-black">i</div>
            <div className="bg-white w-5 h-5 rounded-full text-black">l</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

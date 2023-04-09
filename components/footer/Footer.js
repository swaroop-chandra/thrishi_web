import React from "react";
import bg from "../../public/images/footer/background.png";

function Footer() {
  return (
    <div
      className=" w-full  h-[23rem] mt-10 pt-20 pb-10 px-20"
      style={{
        backgroundImage: `url(${bg.src})`,
        wordSpacing: "12px",
        position: "sticky",
        zIndex: "-3",
        backgroundPosition: "top",
      }}
    >
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <h1 className="text-4xl font-thin mb-6">
            Get our latest <br />
            updates
          </h1>

          <form className="flex">
            <input
              type="text"
              name="teest"
              id="test"
              placeholder="Your Email"
              className=" bg-transparent text-black"
              style={{
                borderBottom: "2px solid black",
                color: "black",
              }}
            />

            <img
              src="/images/footer/submit.png"
              alt="submit"
              width={40}
              height={40}
            />
          </form>
        </div>
        <div>
          <div className="font-extralight text-md"> Get in touch</div>
          <h3 className="font-semibold text-3xl">thishi@gmail.com</h3>
          <h3 className="font-semibold text-3xl">+91 - 9826345763</h3>
          <h3 className="font-semibold text-3xl">Address</h3>
          <div className="font-extralight text-md mt-4"> Explore</div>
          <ul className="flex mt-4 gap-8">
            <li>About us</li>
            <li>Services</li>
            <li>Portfolio</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex justify-between">
        <div className="flex">
          <h5>Privacy Policy</h5> <h5>Terms & Condition</h5>
        </div>
        <div className="flex">See what we are upto</div>
      </div>
    </div>
  );
}

export default Footer;

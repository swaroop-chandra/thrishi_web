import React, { useState } from "react";
import LetsTalk from "../common/buttons/LetsTalk";
import MapScreen from "./MapScreen";

function Landing() {
  return (
    <div className="flex flex-col h-[22rem] lg:h-screen ">
      <div className="text-center p-6">
        <h1 className="lg:text-2xl my-4 mt-16 text-lg">
          You can reach out the premises between 10:00 AM to 08:30 PM
        </h1>
        <h3 className="lg:text-md text-sm my-4">
          Bunts Hostel Road Near Jyothi Circle, Mangalore 575003 India
        </h3>
      </div>
      <div>
        <a
          href="https://www.google.com/maps/place/Taskmo+-+Gig+Discovery+Platform+%7C+Redefining+Future+of+Work+%7C+Gig+Marketplace/@12.9159509,77.5962195,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1577904dbbed:0x32faceb9c0378a86!8m2!3d12.9159457!4d77.5987944!16s%2Fg%2F11cncvdjqk?entry=ttu"
          target="_blank"
        >
          <img
            src="https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/pin-s+bf3131(77.5988,12.9159)/77.5988,12.9159,14,0,40/1279x500?before_layer=admin-0-boundary&access_token=pk.eyJ1Ijoic3dhcG9jaGFuIiwiYSI6ImNsaXZxMG53bjBhNGozZ2xtYnJqYXJ3YnMifQ.82kFCo3e8kkeAVFgalGRXA"
            alt="grey"
            className=" lg:block "
            width={"100%"}
            height={"500"}
          />
        </a>
        {/* <MapScreen /> */}
      </div>
    </div>
  );
}

export default Landing;

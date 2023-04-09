import React from "react";

function VideoHome() {
  return (
    <div className="flex flex-col justify-center lg:items-center bg-slate-200 lg:h-[22rem] p-10">
      <div className="text-base text-gray-400">We are leading company in</div>
      <h3 className="text-3xl font-semibold mt-4">
        Event management & Digital marketing
      </h3>
      <p className="m-0 text-sm text-gray-700 lg:w-[33rem] lg:text-center my-6">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and{" "}
      </p>
      <div className="flex justify-center">
        <img
          src="/images/home/video.png"
          alt="video_logo"
          width={70}
          height={70}
        />
      </div>
    </div>
  );
}

export default VideoHome;

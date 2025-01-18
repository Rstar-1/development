import React from "react";
// import LeftSide from "./components/LeftSide";
// import Center from "./components/Center";
// import RightSide from "./components/RightSide";

const page = () => {
  return (
    <div className="h-100 bgsecondaryAI fixed w-full top-0 z-10">
      <img
        src="https://html.themeholy.com/haona/demo/assets/img/bg/hero-2-bg-shape.png"
        alt="h-100"
        className="h-100 w-full"
      />
      <div className="absolute z-50 w-full top-0 left-0 flex items-center h-100">
        <div className="flex sm-block justify-between items-center container mx-auto w-full">
          <div className="w-30 sm-w-full overflow-hidden">
            {/* <LeftSide /> */}
          </div>
          <div className="w-40 sm-w-full overflow-hidden">
            {/* <Center /> */}
          </div>
          <div className="w-30 sm-w-full overflow-hidden">
            {/* <RightSide /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

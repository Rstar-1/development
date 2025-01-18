import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

const page = () => {
  return (
    <div className="">
      <div className="flex gap-12 w-full">
        <div className="w-70">
          <LeftSide />
        </div>
        <div className="w-30">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default page;

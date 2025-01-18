import React from "react";
import Image from "next/image";
import mine from "../../../images/mine1.png";
import Progress from "../../../components/chart/Progress";

const RightSide = () => {
  return (
    <div className="grid-cols-1 gap-12">
      <div className="p16 bgprimary b-shadow rounded-5">
        <div className="flex items-center">
          <div className="w-60">
            <h2 className="fsize22 mtpx1 mbpx1 textwhite">Welcome Back</h2>
            <p className="fsize14 textwhite">Dashboard</p>
            <div className="grid-cols-2 mtpx16">
              <div>
                <p className="fsize18 font-600 textwhite">270 +</p>
                <p className="fsize12 textwhite">Website</p>
              </div>
              <div>
                <p className="fsize18 font-600 textwhite">290 +</p>
                <p className="fsize12 textwhite">Website</p>
              </div>
            </div>
          </div>
          <div className="w-40">
            <Image
              src={mine}
              alt="mine-img"
              className="mine-img object-contain"
            />
          </div>
        </div>
      </div>
      <div className="bgwhite p16 rounded-5">
        <Progress value={9} label="Reach " />
      </div>
      <div className="bgwhite p16 rounded-5">
        <Progress value={9} label="Reach " />
      </div>
      <div className="bgwhite p16 rounded-5">
        <Progress value={9} label="Reach " />
      </div>
    </div>
  );
};

export default RightSide;

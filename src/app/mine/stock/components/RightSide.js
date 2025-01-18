import React from "react";
import Image from "next/image";
import mine from "../../../images/mine2.png";

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
      <div>
        <div className="bgwhite px16 py10 w-max flex items-center gap-6 round_btn">
          <div className="dot rounded-full bgsuccess"></div>
          <div className="dot rounded-full bgdanger"></div>
          <div className="dot rounded-full bgwarning"></div>
        </div>
        <div className="px20 py10 bordb bgwhite flex items-center justify-between">
          <h6 className="fsize14 textprimary leading font-500 mtpx1 mbpx1 ">
            BOM
          </h6>
          <p className="fsize14 textgray">₹4233</p>
        </div>
        <div className="px20 py10 bordb bgwhite flex items-center justify-between">
          <h6 className="fsize14 textprimary leading font-500 mtpx1 mbpx1 ">
            IOCL
          </h6>
          <p className="fsize14 textgray">₹4233</p>
        </div>
        <div className="px20 py10 bordb bgwhite flex items-center justify-between">
          <h6 className="fsize14 textprimary leading font-500 mtpx1 mbpx1 ">
            IRFC
          </h6>
          <p className="fsize14 textgray">₹4233</p>
        </div>
        <div className="px20 py10 bordb bgwhite flex items-center justify-between">
          <h6 className="fsize14 textprimary leading font-500 mtpx1 mbpx1 ">
            BOM
          </h6>
          <p className="fsize14 textgray">₹4233</p>
        </div>
        <div className="px20 py10 bordb bgwhite flex items-center justify-between">
          <h6 className="fsize14 textprimary leading font-500 mtpx1 mbpx1 ">
            IOCL
          </h6>
          <p className="fsize14 textgray">₹4233</p>
        </div>
        <div className="px20 py10 bordb bgwhite flex items-center justify-between">
          <h6 className="fsize14 textprimary leading font-500 mtpx1 mbpx1 ">
            IRFC
          </h6>
          <p className="fsize14 textgray">₹4233</p>
        </div>
      </div>
    </div>
  );
};

export default RightSide;

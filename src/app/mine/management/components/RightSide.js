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
      <div className="grid-cols-2 sm-grid-cols-1 gap-10">
        <div className="bgwhite w-full rounded-10">
          <div className="py20">
            <h5 className="fsize32 textwarning my1 text-center">80</h5>
            <h6 className="fsize16 font-500 textgray my1 text-center">Mines</h6>
            <p className="text-center fsize12 textgray">Leads of Month</p>
          </div>
        </div>
        <div className="bgwhite w-full rounded-10">
          <div className="py20">
            <h5 className="fsize32 textsuccess my1 text-center">80</h5>
            <h6 className="fsize16 font-500 textgray my1 text-center">Leads</h6>
            <p className="text-center fsize12 textgray">Leads of Month</p>
          </div>
        </div>
      </div>
      <div className="bgwhite p16 rounded-5">
        <div className="grid-cols-3 mx2 gap-8">
          <div className="text-center py12">
            <h4 className="fsize18 my1 leading textprimary font-600">1720K</h4>
            <p className="textgray font-400 fsize13 mtpx4">Profit</p>
          </div>
          <div className="text-center py12 bordx">
            <h4 className="fsize18 my1 leading textprimary font-600">1270K</h4>
            <p className="textgray font-400 fsize13 mtpx4">Loss</p>
          </div>
          <div className="text-center py12">
            <h4 className="fsize18 my1 leading textprimary font-600">1270K</h4>
            <p className="textgray font-400 fsize13 mtpx4">Loss</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;

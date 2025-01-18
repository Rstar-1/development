import React, { useState } from "react";
import Progress from "../../components/chart/Progress";
import Button from "../../components/ui/Button";
import Sidebar from "../../components/ui/Sidebar";
import Add from "./add/Add";

const RightSide = ({ totalPayment, totalCount, totalCount2 }) => {
  const AddInput = [
    {
      label: "Title",
      category: "Input",
      name: "title",
    },
    {
      label: "Category",
      category: "Input",
      name: "category",
    },
    {
      label: "Reason",
      category: "Input",
      name: "reason",
    },
    {
      label: "Payment",
      category: "Input",
      name: "payment",
    },
    {
      label: "Realamount",
      category: "Input",
      name: "realamount",
    },
    {
      label: "Status",
      category: "Switch",
      name: "status",
    },
  ];
  const [sidebar, setSidebar] = useState(false);
  const [sidebar2, setSidebar2] = useState(false);
  const [sidebar3, setSidebar3] = useState(false);
  const openSide = () => {
    setSidebar(true);
  };
  const openSide2 = () => {
    setSidebar2(true);
  };
  const openSide3 = () => {
    setSidebar3(true);
  };
  const closeSide = () => {
    setSidebar(false);
  };
  const closeSide2 = () => {
    setSidebar2(false);
  };
  const closeSide3 = () => {
    setSidebar3(false);
  };
  return (
    <div className="grid-cols-1 gap-12">
      <Sidebar
        isOpen={sidebar}
        onClose={closeSide}
        size="sm"
        title="Add Activity"
      >
        <Add AddInputs={AddInput} cat="Activity" />
      </Sidebar>
      <Sidebar
        isOpen={sidebar2}
        onClose={closeSide2}
        size="sm"
        title="Add Manage"
      >
        <Add AddInputs={AddInput} cat="Manage" />
      </Sidebar>
      <Sidebar
        isOpen={sidebar3}
        onClose={closeSide3}
        size="sm"
        title="Add Stock"
      >
        <Add AddInputs={AddInput} cat="Stock" />
      </Sidebar>
      <div className="grid-cols-3 sm-grid-cols-1 gap-10">
        <Button
          text="Activity"
          size="md"
          round="sm"
          color="primary"
          onClick={() => openSide()}
        />
        <Button
          text="Manage"
          size="md"
          round="sm"
          color="success"
          onClick={() => openSide2()}
        />
        <Button
          text="Stock"
          size="md"
          round="sm"
          color="secondary"
          onClick={() => openSide3()}
        />
      </div>
      <div className="bgwhite p16 rounded-5">
        <Progress value={totalPayment} maxValue={1000000} label="Reach " />
      </div>
      <div className="bgwhite p16 rounded-5">
        <Progress value={totalPayment} maxValue={100000} label="High Limit " />
      </div>
      <div className="bgwhite p16 rounded-5">
        <Progress value={totalPayment} maxValue={10000} label="Mid Limit " />
      </div>
      <div className="grid-cols-2 sm-grid-cols-1 gap-10">
        <div className="bgwhite w-full rounded-10">
          <div className="py20">
            <h5 className="fsize32 textwarning my1 text-center">
              {totalCount}
            </h5>
            <h6 className="fsize16 font-500 textgray my1 text-center">Mines</h6>
            <p className="text-center fsize12 textgray">Total of Mines</p>
          </div>
        </div>
        <div className="bgwhite w-full rounded-10">
          <div className="py20">
            <h5 className="fsize32 textsuccess my1 text-center">{totalCount2}</h5>
            <h6 className="fsize16 font-500 textgray my1 text-center">Stocks</h6>
            <p className="text-center fsize12 textgray">Total of Stocks</p>
          </div>
        </div>
      </div>
      <div className="w-full grid-cols-1 gap-12">
        <div>
          <div className="bgwhite px16 py10 w-max flex items-center gap-6 round_btn">
            <div className="dot rounded-full bgsuccess"></div>
            <div className="dot rounded-full bgdanger"></div>
            <div className="dot rounded-full bgwarning"></div>
          </div>
          <div className="p12 bgwhite flex items-center justify-between">
            <h6 className="fsize14 textprimary leading font-500 mtpx1 mbpx1 ">
              FD
            </h6>
            <p className="fsize14 textgray">₹4233</p>
          </div>
        </div>
        <div>
          <div className="bgwhite px16 py10 w-max flex items-center gap-6 round_btn">
            <div className="dot rounded-full bgsuccess"></div>
            <div className="dot rounded-full bgdanger"></div>
            <div className="dot rounded-full bgwarning"></div>
          </div>
          <div className="p12 bgwhite flex items-center justify-between">
            <h6 className="fsize14 textprimary leading font-500 mtpx1 mbpx1 ">
              FD
            </h6>
            <p className="fsize14 textgray">₹4233</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;

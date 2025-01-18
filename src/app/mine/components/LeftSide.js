import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const BarChart = dynamic(() => import("../../components/chart/BarChart"), {
  ssr: false,
});

const LeftSide = ({ getdata2, getdata3 }) => {
  const [check, setCheck] = useState(1);
  const [category, setCategory] = useState(1);
  const [chartData, setChartData] = useState([]);
  const [chartData2, setChartData2] = useState([]);

  useEffect(() => {
    if (getdata2 && getdata2.length > 0) {
      const transformedData = [
        {
          name: "Payments",
          data: getdata2.map((item) => ({
            x: item?.title,
            y: item?.payment || 0,
          })),
        },
      ];

      setChartData(transformedData);
    }
    if (getdata3 && getdata3.length > 0) {
      const transformedData = [
        {
          name: "Payments", // You can customize the series name
          data: getdata3.map((item) => ({
            x: item?.title,
            y: item?.payment || 0,
          })),
        },
      ];

      setChartData2(transformedData);
    }
  }, [getdata2, getdata3]);

  return (
    <div>
      <div className="bgwhite rounded-10 overflow-hidden">
        <div className="flex sm-block items-center bordb">
          <div className="w-60 sm-w-full px20 sm-px15 py15 sm-py14">
            <h5 className="fsize20 sm-fsize16 my1 leading textdark">
              Monthly Revenue
            </h5>
            <p className="fsize13 sm-fsize11 font-200 mtpx4 textgray">
              1 Year Updates
            </p>
          </div>
          <div className="w-40 sm-w-full grid-cols-2">
            <div
              className={`${
                category === 1 ? "bgprimary" : ""
              } px20 py25 sm-py15 cursor-pointer`}
              onClick={() => setCategory(1)}
            >
              <p
                className={`${
                  category === 1 ? "textwhite" : "textgray"
                } fsize13 sm-fsize11 font-200`}
              >
                Profit Capital
              </p>
              <h4
                className={`${
                  category === 1 ? "textwhite" : "textdark"
                } fsize30 sm-fsize20 leading my10`}
              >
                4332
              </h4>
            </div>
            <div
              className={`${
                category === 2 ? "bgprimary" : ""
              } px20 py25 sm-py15 cursor-pointer`}
              onClick={() => setCategory(2)}
            >
              <p
                className={`${
                  category === 2 ? "textwhite" : "textgray"
                } fsize13 sm-fsize11 font-200`}
              >
                Debit Capital
              </p>
              <h4
                className={`${
                  category === 2 ? "textwhite" : "textdark"
                } fsize30 sm-fsize20 leading my10`}
              >
                4332
              </h4>
            </div>
          </div>
        </div>
        <BarChart
          chartSeries={
            category === 1
              ? chartData.length
                ? chartData
                : []
              : category === 2
              ? chartData2.length
                ? chartData2
                : []
              : []
          }
        />
      </div>
      <div className="mtpx16 grid-cols-2 gap-10">
        <div className="">
          <div className="px25 py14 bgwhite round_btn w-max">
            <p className="fsize14 leading textprimary font-500">
              Activity Of Year
            </p>
          </div>
          <div className="bgwhite py20 px20 round_btn">
            <div className="w-full grid-cols-1 gap-12">
              <div className="w-full bordb flex items-center ">
                <p
                  onClick={() => setCheck(1)}
                  className={
                    check === 1
                      ? "fsize14 textprimary cursor-pointer px16 pbpx6 tab-primary"
                      : "fsize14 textgray cursor-pointer px16 pbpx6"
                  }
                >
                  RD
                </p>
                <p
                  onClick={() => setCheck(2)}
                  className={
                    check === 2
                      ? "fsize14 textprimary cursor-pointer px16 pbpx6 tab-primary"
                      : "fsize14 textgray cursor-pointer px16 pbpx6"
                  }
                >
                  FD
                </p>
                <p
                  onClick={() => setCheck(3)}
                  className={
                    check === 3
                      ? "fsize14 textprimary cursor-pointer px16 pbpx6 tab-primary"
                      : "fsize14 textgray cursor-pointer px16 pbpx6"
                  }
                >
                  SIP
                </p>
              </div>
              <div className="p12 bg-fa rounded-5 flex items-center justify-between">
                <h6 className="fsize14 textprimary leading font-500 mtpx1 mbpx1 ">
                  FD
                </h6>
                <p className="fsize14 textgray">₹4233</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="px25 py14 bgwhite round_btn w-max">
            <p className="fsize14 leading textprimary font-500">
              Activity Of Year
            </p>
          </div>
          <div className="bgwhite py20 px20 round_btn">
            <div className="w-full grid-cols-1 gap-12">
              <div className="w-full bordb flex items-center ">
                <p
                  onClick={() => setCheck(1)}
                  className={
                    check === 1
                      ? "fsize14 textprimary cursor-pointer px16 pbpx6 tab-primary"
                      : "fsize14 textgray cursor-pointer px16 pbpx6"
                  }
                >
                  RD
                </p>
                <p
                  onClick={() => setCheck(2)}
                  className={
                    check === 2
                      ? "fsize14 textprimary cursor-pointer px16 pbpx6 tab-primary"
                      : "fsize14 textgray cursor-pointer px16 pbpx6"
                  }
                >
                  FD
                </p>
                <p
                  onClick={() => setCheck(3)}
                  className={
                    check === 3
                      ? "fsize14 textprimary cursor-pointer px16 pbpx6 tab-primary"
                      : "fsize14 textgray cursor-pointer px16 pbpx6"
                  }
                >
                  SIP
                </p>
              </div>
              <div className="p12 bg-fa rounded-5 flex items-center justify-between">
                <h6 className="fsize14 textprimary leading font-500 mtpx1 mbpx1 ">
                  FD
                </h6>
                <p className="fsize14 textgray">₹4233</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;

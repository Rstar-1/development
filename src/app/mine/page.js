"use client";

import React, { useEffect, useState } from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import FeatherIcon from "feather-icons-react";
import {
  paginationactivity,
  paginationnotactivity,
  paginationplusactivity,
  paginationplusmanage,
  paginationplusstock,
} from "../redux/mine/MineSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/ui/Loader";

const page = () => {
  // Redux State
  const dispatch = useDispatch();
  const getdata = useSelector(
    (state) => state?.minedata?.activitydata?.activitystore
  );
  const getdata2 = useSelector(
    (state) => state?.minedata?.activitypdata?.activitypstore
  );
  const getdata3 = useSelector(
    (state) => state?.minedata?.activityndata?.activitynstore
  );
  const totalCount = useSelector(
    (state) => state?.minedata?.managepdata?.totalCount
  );
  const totalCount2 = useSelector(
    (state) => state?.minedata?.stockpdata?.totalCount
  );
  const { loading, error } = useSelector((state) => state?.minedata);
  // Redux State

  // Pagination and Search
  const [currentpage] = useState(0);
  const [currentpage2] = useState(0);
  const [currentpage3] = useState(0);
  const [search] = useState("");
  const [search2] = useState("");
  const [search3] = useState("");
  // Pagination and Search
  // API useEffect
  useEffect(() => {
    dispatch(
      paginationactivity({
        offset: currentpage * 6,
        search,
        pagination: true,
      })
    );
    dispatch(
      paginationplusactivity({
        offset: currentpage2 * 6,
        search: search2,
        pagination: false,
      })
    );
    dispatch(
      paginationnotactivity({
        offset: currentpage3 * 6,
        search: search3,
        pagination: false,
      })
    );
    dispatch(
      paginationplusmanage({
        offset: currentpage3 * 6,
        search: search3,
        pagination: true,
      })
    );
    dispatch(
      paginationplusstock({
        offset: currentpage3 * 6,
        search: search3,
        pagination: true,
      })
    );
  }, [
    dispatch,
    currentpage,
    currentpage2,
    currentpage3,
    search,
    search2,
    search3,
  ]);
  // API useEffect

  // Loading and Error
  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-100 bgwhite z-50 flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  if (error) {
    return <div className="flex justify-center items-center h-100">Error</div>;
  }
  // Loading and Error

  const filterAndCalculatePayment = () => {
    const filteredData = getdata2?.filter(
      (item) => item.payment !== undefined && !isNaN(Number(item.payment))
    );
    const totalPayment = filteredData?.reduce(
      (sum, item) => sum + Number(item.payment),
      0
    );
    return totalPayment || 0;
  };
  const totalPayment = filterAndCalculatePayment();

  const dashcardmap = [
    {
      image:
        "https://verona.primereact.org/demo/images/dashboard/interactions.svg",
      number: "290150",
      subtitle: "Total Capital",
      status: true,
    },
    {
      image: "https://verona.primereact.org/demo/images/dashboard/rate.svg",
      number: "20000",
      subtitle: "Profitable AC",
      status: false,
    },
    {
      image: "https://verona.primereact.org/demo/images/dashboard/users.svg",
      number: "60000000",
      subtitle: "Mine",
      status: false,
    },
    {
      image:
        "https://verona.primereact.org/demo/images/dashboard/locations.svg",
      number: "4000",
      subtitle: "Business",
      status: false,
    },
  ];
  const formatNumber = (num) => {
    const number = parseInt(num, 10);
    if (number >= 10000000) return (number / 10000000).toFixed(1) + " Cr";
    if (number >= 100000) return (number / 100000).toFixed(1) + " L";
    return number.toString();
  };
  return (
    <div className="">
      <div className="grid grid-cols-4 sm-grid-cols-1 gap-12">
        {dashcardmap.map((e, index) => (
          <div
            key={index}
            className="bgwhite h-das_card rounded-5 relative px12 overflow-hidden"
          >
            <div className="flex items-center mtpx14">
              <div
                className={`${
                  index === 0
                    ? "bgprimary"
                    : null || index === 1
                    ? "bgsuccess"
                    : null || index === 2
                    ? "bginfo"
                    : null || index === 3
                    ? "bgwarning"
                    : null
                } dash-dot flex justify-center items-center rounded-10`}
              >
                <FeatherIcon
                  icon="pocket"
                  className="flex textwhite"
                  size="20"
                />
              </div>
              <div className="mlpx10">
                <h4
                  className={`${
                    index === 0
                      ? "textprimary"
                      : null || index === 1
                      ? "textsuccess"
                      : null || index === 2
                      ? "textinfo"
                      : null || index === 3
                      ? "textwarning"
                      : null
                  } my1 leading fsize20`}
                >
                  ₹{formatNumber(e?.number)}
                </h4>
                <p className="fsize12 textgray font400">{e?.subtitle}</p>
              </div>
            </div>
            <div className="absolute top-0 right-0">
              <img
                src={
                  e?.status === true
                    ? "https://atlantis.primereact.org/demo/images/ecommerce-dashboard/value.svg"
                    : "https://atlantis.primereact.org/demo/images/ecommerce-dashboard/rate.svg"
                }
                alt="gold"
                className="stock-img flex"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full">
              <img
                src={e?.image}
                alt="gold"
                className="w-full object-cover dash-img flex"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-12 w-full mtpx20">
        <div className="w-70">
          <LeftSide getdata2={getdata2} getdata3={getdata3} />
        </div>
        <div className="w-30">
          <RightSide
            totalPayment={totalPayment}
            totalCount2={totalCount2}
            totalCount={totalCount}
          />
        </div>
      </div>
    </div>
  );
};

export default page;

import FeatherIcon from "feather-icons-react";
import React from "react";

const Banner = ({ Title, Route, Original }) => {
  return (
    <div className="mtpx15">
      <h4 className="fsize18 leading mtpx1 mbpx1 textprimary">{Title}</h4>
      <div className="flex items-center gap-3 mtpx6">
        <p className="fsize13 textgray font-400">Dashboard</p>
        <FeatherIcon icon="chevron-right" size="15" className="textgray flex" />
        <p className="fsize13 textgray font-400">{Route}</p>
        <FeatherIcon icon="chevron-right" size="15" className="textgray flex" />
        <p className="fsize13 textgray font-400">{Original}</p>
      </div>
    </div>
  );
};

export default Banner;

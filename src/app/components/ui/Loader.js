import React from "react";
import FeatherIcon from "feather-icons-react";

const Loader = () => {
  return (
    <div className="">
      <FeatherIcon
        icon="loader"
        className="flex textprimary mx-auto"
        size="42"
      />
      <h6 className="textdark mlpx2 fsize22 mbpx1 mtpx6 font-600">
        Bara
        <span className="textprimary mlpx2">Singha</span>
      </h6>
    </div>
  );
};

export default Loader;

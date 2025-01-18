import FeatherIcon from "feather-icons-react";
import React from "react";

const Sidebar = ({ isOpen, onClose, title, children, size = "" }) => {
  if (!isOpen) return null;

  const modalSizeClass = {
    sm: "wid-sidebar",
    md: "w-30",
    lg: "w-50",
  }[size];

  return (
    <div className="fixed w-full left-0 h-100 top-0 z-50 flex justify-end">
      <div
        className={`bgwhite h-100 b-shadow ${modalSizeClass}`}
        role="dialog"
        aria-labelledby="modal-title"
      >
        <div>
          <div className="flex justify-between bgprimary items-center px12 py10">
            <h2 id="modal-title" className="fsize16 my1 textwhite">
              {title}
            </h2>
            <FeatherIcon
              aria-label="Close"
              icon="x"
              className="flex textwhite cursor-pointer"
              size="20"
              onClick={onClose}
            />
          </div>
          <div className="p20 cust-scroll">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

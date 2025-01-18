import React from "react";

const Modal = ({ isOpen, onClose, title, children, size = "" }) => {
  if (!isOpen) return null;

  const modalSizeClass = {
    sm: "w-20",
    md: "w-30",
    lg: "w-40",
  }[size];

  return (
    <div className="fixed bg-glass w-full h-100 top-0 z-50">
      <div
        className={`bg-white rounded-lg ${modalSizeClass}`}
        role="dialog"
        aria-labelledby="modal-title"
      >
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
        <div className="py20 px12">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

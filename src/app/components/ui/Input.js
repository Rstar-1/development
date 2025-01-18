import React from "react";

const Modal = ({ theme = "", placeholders, values, onChanges, names }) => {
  const InputClass = {
    primary: "side-input",
    secondary: "side-input2",
    tertiary: "side-input3",
  }[theme];

  return (
    <div className="">
      <input
        className={`${InputClass} bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec`}
        placeholder={placeholders}
        value={values}
        onChange={onChanges}
        name={names}
      />
    </div>
  );
};

export default Modal;

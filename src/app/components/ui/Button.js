import React from "react";

const Button = ({
  text,
  onClick,
  color = "",
  size = "",
  round = "",
  animation = "",
  disabled = false,
  className = "",
}) => {
  const colorClasses = {
    primary: "bgprimary textwhite",
    secondary: "bgsecondary textwhite",
    dprimary: "bgprimaryAI textdark",
    dsecondary: "bgsecondaryAI textdark",
    success: "bgsuccess textwhite",
    danger: "bgdanger textwhite",
    warning: "bgwarning textwhite",
  };
  const sizeClasses = {
    sm: "px12 py4 fsize13",
    md: "px20 py7 fsize14",
    lg: "px25 py5 fsize20",
  };
  const roundClasses = {
    sm: "rounded-5",
    md: "rounded-10",
    lg: "rounded-20",
  };

  const buttonClass = `
    ${colorClasses[color]}
    ${sizeClasses[size]}
    ${roundClasses[round]}
    ${animation === "normal" ? "btn-style1" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${className}
    border-0 font-500
  `;
  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;

import React from "react";
import ButtonStyles from "./Button.style";

const Button = ({ children, ...props }) => {
  return <ButtonStyles {...props}>{children}</ButtonStyles>;
};

export default Button;

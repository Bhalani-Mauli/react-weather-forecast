import React from "react";
import { ButtonStyled } from "./Button.styles";

interface PropsType {
  children: "string" | React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
}

function Button(props: PropsType) {
  const { className, onClick, children } = props;
  return (
    <ButtonStyled className={className} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}
export default Button;

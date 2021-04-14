import React, {ReactDOM} from "react";
import styled from "@emotion/styled";

interface IButtonProps{
  bgColor?: string,
  text?: string,
  children?: ReactDOM | string
  size?: "xs" | "sm" | "md" | "lg" | "xl"
}

const defaultProps: IButtonProps = {
  bgColor: "#1890FF",
  children: "关闭",
  size: "md"
}

const handleSize = (value: string) => {
  switch (value) {
    case "xs":

  }
}
export const Button = (props?: IButtonProps) => {
  const { bgColor, children } = {...defaultProps, ...props}

  const ButtonWrapper = styled.button<IButtonProps>`
    background-color: ${bgColor};
    color: white;
    border: none;
    
    ${1}
  `
  return <ButtonWrapper>{children}</ButtonWrapper>
}
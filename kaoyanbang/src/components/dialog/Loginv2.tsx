import React, {Dispatch, ReactElement, ReactNode, SetStateAction} from "react";
import styled from "@emotion/styled";
import ReactDOM from "react-dom";
import {FlexWrapper, GFooter, GHeader, GMain, GridBox} from "../lib";
import {Button} from "../button";

interface LoginDialogProps {
  visible?: boolean
  children?: ReactNode
  buttons?: ReactElement[],
  hide?: (value: React.SetStateAction<boolean>) => void,
  maskClose?: boolean
  title?: string
}

const defaultProps: LoginDialogProps = {
  visible: false,
  buttons: [<Button>关闭</Button>,<Button>保存</Button>],
  hide: () => {},
  maskClose: false,
  title: "标题"
}

export const Dialog = (props: LoginDialogProps) => {
  // merge options
  const {title, visible, children, buttons, hide, maskClose} = {...defaultProps, ...props}

  // 关闭事件
  const hideDialog: React.MouseEventHandler = (e) => {
    if (hide) {
      hide(false)
    }
  }

  // 遮罩层外点击事件
  const onClickMask: React.MouseEventHandler = (e) => {
    if (maskClose && hide) {
      hide(false)
    }
  }

  const jsxElement = visible ?
    <>
      <DialogWrapperPortal onClick={onClickMask}></DialogWrapperPortal>
      <DialogWrapperContent >
        <GridBox rows={"30px 1fr 30px"} height={"20rem"} width={"100%"}>
          <GHeader>
            <FlexWrapper between>
              {title}
              <div onClick={hideDialog}>
                close
              </div>
            </FlexWrapper>
          </GHeader>
          <GMain>{children}</GMain>
          <GFooter marginBottom={"10px"}>
            <FlexWrapper end>
              {buttons?.map((btn, index) => React.cloneElement(btn, {key: index}))}
            </FlexWrapper>
          </GFooter>
        </GridBox>
      </DialogWrapperContent>
    </> : null

  // create portal, render dialog jsxElement to <body>
  return ReactDOM.createPortal(jsxElement, document.body)
}

const DialogWrapperPortal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  // TODO: black transform
  background-color: black;
  opacity: .5;
`

const DialogWrapperContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 20rem;
  min-height: 20rem;
  border: 1px solid black;
  border-radius: 10px;
  z-index: 2;
  background-color: white;
`
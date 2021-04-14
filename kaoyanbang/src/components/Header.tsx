import React from "react";
import {FlexWrapper} from "./lib";
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {loginModalSliceActions} from "../store/home.slice";

export const Header = () => {
  const dispatch = useDispatch()

  return <FlexWrapper around>
    <div>首页</div>
    <div>学习路线</div>
    <div>选项三</div>
    <div>选项四</div>
    <div>选项五</div>
    <div onClick={() => dispatch(loginModalSliceActions.openLoginModal())}>登录</div>
  </FlexWrapper>
}
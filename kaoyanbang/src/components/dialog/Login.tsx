import React from "react";
import {Button, Card, Input, Modal, Space} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {selectLoginModalOpen} from "../../store/status";
import {loginModalSliceActions} from "../../store/home.slice";
import {FlexWrapper} from "../lib";
import styled from "@emotion/styled";
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from "@ant-design/icons";


export const Login = () => {
  const dispatch = useDispatch();

  const isModalVisible = useSelector(selectLoginModalOpen)

  const handleOk = () => {
    dispatch(loginModalSliceActions.closeLoginModal())
  };

  const handleCancel = () => {
    dispatch(loginModalSliceActions.closeLoginModal())
  };

  return <>
    <Modal title="请登录" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <FlexWrapper between>
        <LeftContent>
          <Card title="账号密码登录">
            <Space direction={"vertical"}>
              <Input placeholder="请输入用户名/手机号/邮箱" style={{borderBottom: "1px solid #f0f0f0"}}  bordered={false} prefix={<UserOutlined />}/>
              <Input.Password
                placeholder="请输入密码"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                bordered={false}
                style={{borderBottom: "1px solid #f0f0f0"}}
                prefix={<LockOutlined color={"#f0f0f0"}/>}
              />
              <Button>登录</Button>
            </Space>
          </Card>
        </LeftContent>
        <RightContent>right</RightContent>
      </FlexWrapper>
    </Modal>
  </>
}

const LeftContent = styled.div`
`

const RightContent = styled.div`

`
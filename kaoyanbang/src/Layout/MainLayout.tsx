import { Header as HeaderContent } from 'components/Header'
import {GFooter, GHeader, GMain, GridBox} from "../components/lib";
import {Login} from "../components/dialog/Login";
import {Button} from "antd";

export const MainLayout = () => {
  return <GridBox>
    <GHeader>
      <HeaderContent />
    </GHeader>
    <GMain>
     <Login />
    </GMain>
    <GFooter>footer</GFooter>
  </GridBox>
}
// 登录弹窗状态
import {RootState} from "./index";

export const selectLoginModalOpen = (state: RootState) => state.loginModalSlice.isLoginModalOpen

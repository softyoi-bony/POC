import { Dimensions } from "react-native";

export enum Route {
  Home = 'Home',
  RegisterScreen='Register',
  VerifyScreen='Verify',
}

export enum RouteNavigator {
  HomeNavigator = 'HomeNavigator',
}

export const { height, width } = Dimensions.get('window');
const guidelineBaseWidth = 350;

const scale = size => (width / guidelineBaseWidth) * size;
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor
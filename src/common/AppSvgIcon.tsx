import React from 'react';
import { ImageStyle, StyleProp } from 'react-native';

import RightArrow from '../assets/SvgIcons/RightArrow.svg';
import Svg, { Path } from 'react-native-svg'; 

type AppSvgIconProps = {
  name: keyof typeof SvgIcons | React.FC<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  color?: string;
  style?: StyleProp<ImageStyle>;
  stroke?: string;
};

export interface AppSvgIconName {
  name: keyof typeof SvgIcons;
  style?: StyleProp<ImageStyle>;
}

const AppSvgIcon = ({ name, ...props }: AppSvgIconProps) => {
  const Icon = typeof name === 'string' ? SvgIcons[name] : name;
  return <>{Icon ? <Icon {...props} /> : null}</>;
};

export default AppSvgIcon;

export const SvgIcons = {
  RightArrow,
};

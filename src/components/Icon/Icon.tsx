import React from 'react';
import Box, { BoxProps } from '../Box';
import useTheme from '../../utils/useTheme';
import { icons } from '../../theme';

export interface IconProps
  extends BoxProps<React.SVGAttributes<SVGElement> & React.HTMLAttributes<HTMLOrSVGElement>> {
  /** The icon that you want to show */
  type: keyof typeof icons;

  /** The color of the icon */
  color?: BoxProps['color'];

  /** The size of the icon. Can be 18px or 24px */
  size?: 'x-small' | 'small' | 'large';
}

/** An simple SVG element exported as a React component. It renders a simple <svg> */
const Icon: React.FC<IconProps> = ({ type, size = 'large', color = 'current', ...rest }) => {
  const { icons } = useTheme();
  const viewBox = icons[type]?.viewBox || '0 0 24 24';

  let sizeInPx;
  if (size === 'x-small') {
    sizeInPx = 12;
  } else if (size === 'small') {
    sizeInPx = 18;
  } else {
    sizeInPx = 24;
  }

  return (
    <Box
      as="svg"
      display="inline-block"
      verticalAlign="sub"
      flexShrink={0}
      width={sizeInPx}
      height={sizeInPx}
      color={color}
      viewBox={viewBox}
      role="presentation"
      {...rest}
    >
      {icons[type].path}
    </Box>
  );
};

export default Icon;

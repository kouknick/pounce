import React from 'react';
import Box, { BoxProps } from '../Box';

export interface TextProps extends BoxProps<React.AllHTMLAttributes<HTMLParagraphElement>> {
  /** The size of the font */
  size: 'small' | 'medium' | 'large';
}

/**
 * Extends <a href="/#/Box">Box</a>
 *
 * Responsive typographic component. Anywhere you want to add some text that doesn't constitute a
 * heading or a title, this component is what you need.
 *
 * */
const Text: React.FC<TextProps> = React.forwardRef(function Text({ size, ...rest }, ref) {
  const sizeProps = (function() {
    switch (size) {
      case 'large':
        return { fontSize: 'large' as const, lineHeight: 3 };
      case 'medium':
        return { fontSize: 'medium' as const, lineHeight: 2 };
      case 'small':
      default:
        return { fontSize: 'small' as const, lineHeight: 1 };
    }
  })();

  return <Box ref={ref} {...sizeProps} {...rest} />;
});

export default Text;

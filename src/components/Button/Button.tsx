import * as React from 'react';
import AbstractButton from '../AbstractButton';
import { ReactAttributes } from '../Box';
import useButtonStyles from './useButtonStyles';
import Spinner from '../Spinner';
import Icon, { IconProps } from '../Icon';

export interface ButtonProps
  extends ReactAttributes<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  /** The variant of the button that decides the colors */
  variant?: 'solid' | 'outline';

  /** The color scheme of the button for solid variants */
  color?: 'blue' | 'violet' | 'teal' | 'green' | 'orange' | 'red' | 'gray' | 'darkgray';

  /** The icon present on the button  */
  icon?: IconProps['type'];

  /** The side of the button in which the icon appears on. Defaults to `left`. */
  iconAlignment?: 'left' | 'right';

  /** Whether the button should occupy entirety of its parent. Defaults to `false` */
  fullWidth?: boolean;

  /** Whether the button is disabled */
  disabled?: boolean;

  /** Whether the button should have a loading spinner next to it */
  loading?: boolean;

  /** Whether the button should always be marked as active. Helpful for menus. */
  active?: boolean;
}

/**
 * Extends <a href="/#/Box">Box</a>
 *
 * The core re-usable button that you will use in the app.
 */
const Button: React.FC<ButtonProps> = React.forwardRef(function Button(
  {
    variant = 'solid',
    color = 'blue',
    disabled = false,
    active = false,
    loading = false,
    fullWidth = false,
    iconAlignment = 'left',
    icon,
    children,
    ...rest
  },
  ref
) {
  const styles = useButtonStyles({ color, variant, active });

  return (
    <AbstractButton
      ref={ref}
      disabled={disabled}
      aria-disabled={disabled}
      aria-pressed={active}
      width={fullWidth ? '100%' : 'auto'}
      {...styles}
      {...rest}
    >
      {icon && iconAlignment === 'left' && !loading && (
        <Icon size="small" ml={-1} mr={2} type={icon} />
      )}
      {loading && <Spinner size="small" mr={2} />}
      {children}
      {icon && iconAlignment === 'right' && !loading && (
        <Icon size="small" mr={-1} ml={3} type={icon} />
      )}
    </AbstractButton>
  );
});

export default Button;

import React from 'react';
import css, { SystemStyleObject } from '@styled-system/css';
import Box, { BoxProps, transformAliasProps } from '../Box';

export interface PseudoBoxProps extends BoxProps {
  /**
   * Styles for CSS selector `&:after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <PseudoBox _after={{content:`""` }}/>
   * ```
   */
  _after?: SystemStyleObject;
  /**
   * Styles for CSS selector `&:before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <PseudoBox _before={{content:`""` }}/>
   * ```
   */
  _before?: SystemStyleObject;
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus?: SystemStyleObject;
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover?: SystemStyleObject;
  /**
   * Styles for CSS Selector `&:active`
   */
  _active?: SystemStyleObject;
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed?: SystemStyleObject;
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   * - CSS selector `&[aria-selected=true]`
   */
  _selected?: SystemStyleObject;
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin?: SystemStyleObject;

  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid?: SystemStyleObject;
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&:disabled:focus`
   * - `&:disabled:hover`
   * - `&:focus[aria-disabled=true]`
   * - `&:hover[aria-disabled=true]`
   */
  _disabled?: SystemStyleObject;
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed?: SystemStyleObject;
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded?: SystemStyleObject;
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked?: SystemStyleObject;
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _mixed?: SystemStyleObject;
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd?: SystemStyleObject;
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even?: SystemStyleObject;
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited?: SystemStyleObject;
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly?: SystemStyleObject;
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first?: SystemStyleObject;
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last?: SystemStyleObject;
  /**
   * Styles to apply when you hover on a parent that has `role=group`.
   */
  _groupHover?: SystemStyleObject;
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst?: SystemStyleObject;
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast?: SystemStyleObject;
  /**
   * Styles for CSS Selector `&::placeholder`.
   * Useful for inputs
   */
  _placeholder?: SystemStyleObject;
}

/**
 * The selectors are based on [WAI-ARIA state properties](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) and common CSS Selectors
 */
const hover = '&:hover';
const active = '&:active, &[data-active=true]';
const focus = '&:focus';
const visited = '&:visited';
const even = '&:nth-of-type(even)';
const odd = '&:nth-of-type(odd)';
const disabled =
  '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover';
const checked = '&[aria-checked=true]';
const mixed = '&[aria-checked=mixed]';
const selected = '&[aria-selected=true], [data-selected] > &';
const invalid = '&[aria-invalid=true]';
const pressed = '&[aria-pressed=true]';
const readOnly = '&[aria-readonly=true], &[readonly]';
const first = '&:first-of-type';
const last = '&:last-of-type';
const expanded = '&[aria-expanded=true]';
const grabbed = '&[aria-grabbed=true]';
const notFirst = '&:not(:first-of-type)';
const notLast = '&:not(:last-of-type)';
const groupHover = '[role=group]:hover &';

const PseudoBox = React.forwardRef<HTMLElement, PseudoBoxProps>(function PseudoBox(
  {
    _after,
    _focus,
    _selected,
    _focusWithin,
    _hover,
    _invalid,
    _active,
    _disabled,
    _grabbed,
    _pressed,
    _expanded,
    _visited,
    _before,
    _readOnly,
    _first,
    _notFirst,
    _notLast,
    _last,
    _placeholder,
    _checked,
    _groupHover,
    _mixed,
    _odd,
    _even,
    ...rest
  },
  ref
) {
  return (
    <Box
      ref={ref}
      css={css({
        [hover]: transformAliasProps(_hover),
        [focus]: transformAliasProps(_focus),
        [active]: transformAliasProps(_active),
        [visited]: transformAliasProps(_visited),
        [disabled]: transformAliasProps({
          opacity: 0.3,
          pointerEvents: 'none',
          cursor: 'default',
          ..._disabled,
        }),
        [selected]: transformAliasProps(_selected),
        [invalid]: transformAliasProps(_invalid),
        [expanded]: transformAliasProps(_expanded),
        [grabbed]: transformAliasProps(_grabbed),
        [readOnly]: transformAliasProps(_readOnly),
        [first]: transformAliasProps(_first),
        [notFirst]: transformAliasProps(_notFirst),
        [notLast]: transformAliasProps(_notLast),
        [last]: transformAliasProps(_last),
        [odd]: transformAliasProps(_odd),
        [even]: transformAliasProps(_even),
        [mixed]: transformAliasProps(_mixed),
        [checked]: transformAliasProps(_checked),
        [pressed]: transformAliasProps(_pressed),
        [groupHover]: transformAliasProps(_groupHover),
        '&:before': transformAliasProps(_before),
        '&:after': transformAliasProps(_after),
        '&:focus-within': transformAliasProps(_focusWithin),
        '&::placeholder': _placeholder ?? {},
      })}
      {...rest}
    />
  );
});

export default PseudoBox;

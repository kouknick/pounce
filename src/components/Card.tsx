import React from 'react';
import styled from '@emotion/styled';
import * as StyledSystem from 'styled-system';
import Box, { BoxProps } from './Box';

export interface CardProps extends BoxProps, StyledSystem.BackgroundProps {}

const BaseCard = styled(Box)`
  ${StyledSystem.background}
`;

/**
 * Extends <a href="/#/Box">Box</a>
 *
 * A card is simply a basic layout component with additional style props.
 */
const Card: React.FC<CardProps> = props => (
  <BaseCard bg="white" borderRadius="small" boxShadow="dark100" {...props} />
);

export default Card;

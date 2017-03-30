import { PropTypes } from 'react';
import styled from 'styled-components';
import { colors, bordered, borderWidth } from './_styles';

const Line = styled.div`
  ${bordered};
  border-color: ${colors.gold} transparent transparent transparent;
  height: ${borderWidth};
  position: absolute;
  overflow: hidden;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  width: ${props => props.length}%;
`;

Line.propTypes = {
  length: PropTypes.number.isRequired,
  top: PropTypes.number,
  left: PropTypes.number,
};

export default Line;

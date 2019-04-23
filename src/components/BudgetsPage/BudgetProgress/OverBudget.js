import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const OverBudget = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.overBudget};
  ${media.phone`
    border-radius: 0;
  `}
`;

export default OverBudget;

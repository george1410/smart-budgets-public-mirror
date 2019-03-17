import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const EndLabel = styled.p`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontSmall};
  font-weight: 500;
  flex: 1;
  ${media.phone`
    font-size: ${props => props.theme.fontTiny};
  `}

  &:last-of-type {
    text-align: end;
    font-size: ${props => props.theme.fontSmall};
  }
`;

export default EndLabel;

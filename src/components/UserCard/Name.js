import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Name = styled.span`
  font-size: ${props => props.theme.fontSmall};
  text-align: center;
  margin-right: ${props => (props.shift && '40px')};
  flex: 1;
  ${media.phone`
    font-size: ${props => props.theme.fontTiny};
    margin-right: ${props => (props.shift && '30px')};
  `}
`;

export default Name;

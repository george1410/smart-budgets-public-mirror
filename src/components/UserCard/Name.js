import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Name = styled.span`
  font-size: ${props => props.theme.fontSmall};
  text-align: center;
  margin-right: ${props => (props.shift === 'friends' ? '40px' : '0')};
  flex: 1;
  ${media.phone`
    font-size: ${props => props.theme.fontTiny};
    margin-right: ${props => (props.shift === 'friends' ? '30px' : '0')};
  `}
`;

export default Name;

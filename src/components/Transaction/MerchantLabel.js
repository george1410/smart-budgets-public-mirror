import styled from 'styled-components';
import media from '../../util/mediaQueries';

const MerchantLabel = styled.span`
  font-size: ${props => props.theme.fontSmall};
  color: ${props => props.theme.black};
  font-weight: 500;
  text-transform: capitalize;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  max-width: 220px;
  ${media.phone`
    max-width: 130px;
  `}
`;

export default MerchantLabel;

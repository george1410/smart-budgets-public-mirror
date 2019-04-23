import styled from 'styled-components';
import media from '../../../util/mediaQueries';

export const CategoryTitle = styled.span`
  text-align: left;
  align-self: flex-start;
  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme[props.textCol]};
  background-color: ${props => props.color};
  font-weight: 500;
  white-space: nowrap;
  width: 33.3%;
  text-transform: capitalize;
  margin-bottom: 1rem;
  border-radius: ${props => props.theme.borderRadius};
  ${media.phone`
    width: 25%;
  `}
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

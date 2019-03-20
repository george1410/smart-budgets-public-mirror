import styled from 'styled-components';
import media from '../../../util/mediaQueries';

export const Group = styled.div`
  display: flex;
  flex-direction: ${props => (props.col ? 'column' : 'row')};
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const GroupName = styled.div`
  font-size: ${props => props.theme.fontSmall};
  width: 100%;
  padding-bottom: 2px;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.white};
  color: ${props => props.theme.white};
  user-select: none;
  ${media.tablet`
    border-bottom: 1px solid ${props => props.theme.offWhite};
    color: ${props => props.theme.black};
  `}
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${props => props.theme.fontSmall};
  padding: 0.5rem 0;
  color: ${props => props.theme.white};
  ${media.tablet`
    color: ${props => props.theme.black};
  `}
  ${media.phone`
    flex-direction: row;
    padding: 0;
  `}
`;

export default Group;

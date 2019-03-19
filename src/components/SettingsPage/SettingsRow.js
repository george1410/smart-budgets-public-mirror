import styled from 'styled-components';
import media from '../../util/mediaQueries';

export const SettingsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 4rem;
  border: 1px solid ${props => props.theme.offWhite};
  width: 40rem;

  &:first-of-type {
    border-bottom: none;
  }

  &:last-of-type {
    border-top: none;
    background-color: red;
  }

  ${media.phone`
    width: 100%;
  `}
`;

export const RowTitle = styled.span`
  color: ${props => props.theme.black};
  font-size: 1.4rem;
  font-weight: 500;
`;

export default SettingsRow;

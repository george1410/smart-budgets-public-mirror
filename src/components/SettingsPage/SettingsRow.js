import styled from 'styled-components';
import media from '../../util/mediaQueries';

export const SettingsGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    &:first-of-type {
      border-radius: ${props => props.theme.topCorners};
    }

    &:last-of-type {
      border-top: none;
      border-radius: ${props => props.theme.bottomCorners};
    }

    ${media.phone`
      width: 100%;
      box-shadow: ${props => props.theme.bottomShadow};

      &:first-of-type {
        border-radius: 0;
      }

      &:last-of-type {
        border-radius: 0;
      }
    `}
  }
`;

export const SettingsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.cardShadow};
  width: 40rem;
  background-color: ${props => props.theme.white};
  ${media.phone`
    width: 100%;
    box-shadow: ${props => props.theme.bottomShadow};
  `}
`;

export const RowTitle = styled.span`
  color: ${props => props.theme.black};
  font-size: 1.4rem;
  font-weight: 500;
`;

export default SettingsRow;

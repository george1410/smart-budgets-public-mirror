import styled from 'styled-components';
import media from '../../../util/mediaQueries';

// for margin-rigth calcs look at FilterDrawer

const Wrapper = styled.div`
  display: flex;
  position: relative;
  font-size: ${props => props.theme.fontSmall};
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  margin-right: calc((100vw - 50rem) / 2);
  background-color: ${props => props.theme.primaryBlue};
  width: 50rem;
  min-height: 5rem;
  padding: 0 2rem;
  box-shadow: 0 0 5px black;
  ${media.desktop`
    margin-right: calc((100vw - 72rem) / 2);
  `}
  ${media.tablet`
    align-self: center;
    margin-right: 0;
  `}
  ${media.phone`
    width: 100%;
  `}
`;

export default Wrapper;

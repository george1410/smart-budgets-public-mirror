import styled from 'styled-components';
import media from '../../../util/mediaQueries';

// for margin-rigth calcs look at FilterDrawer
const Wrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.white};
  margin-right: calc((100vw - 50rem) / 2);
  float: right;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 70px;
  width: 50rem;
  border: 1px solid ${props => props.theme.offWhite};
  ${media.desktop`
    margin-right: calc((100vw - 72rem) / 2);
  `}
  ${media.tablet`
    margin: 0 auto;
    float: none;
  `}
  ${media.phone`
    width: 100%;
    padding: 0 1rem;
  `}
`;

export default Wrapper;

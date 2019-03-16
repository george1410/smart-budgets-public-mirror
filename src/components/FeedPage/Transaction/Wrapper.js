import styled from 'styled-components';
import media from '../../../util/mediaQueries';

// for margin-rigth calcs look at FilterDrawer
const Wrapper = styled.div`
  display: flex;
  background-color: rgba(245, 245, 245, 0.5);
  box-shadow: 0 1px 0 ${props => props.theme.shadowCol};
  margin-right: calc((100vw - 50rem) / 2);
  float: right;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 70px;
  width: 50rem;
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

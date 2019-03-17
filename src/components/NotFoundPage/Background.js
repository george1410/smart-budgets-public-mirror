import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Background = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #f1f1f1;
  height: 100vh;
  width: 100vw;
  text-align: center;
  font-size: 35rem;
  ${media.tablet`font-size: 25rem;`}
  ${media.phone`
    flex-direction: column;
  `}
`;

export default Background;

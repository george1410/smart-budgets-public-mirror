import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 3rem;
  width: 100%;
  max-width: 20rem;
  background-color: ${props => (props.bg === 'MONTH' ? props.theme.primaryBlue : props.theme.error)};
  border-radius: 100px;
  position: relative;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  ${media.phone`
    max-width: 15rem;
  `}
`;

export default Wrapper;

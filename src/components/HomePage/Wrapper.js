import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.white};
  height: 100vh;
`;

export default Wrapper;

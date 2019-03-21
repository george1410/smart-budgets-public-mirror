import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 50rem;
  width: 100%;
  padding: 2rem;
  background-color: ${props => props.theme.white};
`;

export default Wrapper;

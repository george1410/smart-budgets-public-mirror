import styled from 'styled-components';

const Dot = styled.div`
  position: absolute;
  right: ${props => (props.align === 'MONTH' ? '3px' : 'calc(100% - 3rem + 3px)')};
  transition: all 0.5s ease-in-out;
  height: calc(3rem - 6px);
  width: calc(3rem - 6px);
  background-color: ${props => props.theme.white};
  border-radius: 100px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
`;

export default Dot;

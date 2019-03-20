import styled from 'styled-components';

const Label = styled.div`
  color: ${props => props.theme.white};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  user-select: none;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default Label;

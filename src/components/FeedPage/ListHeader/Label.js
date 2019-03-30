import styled from 'styled-components';

const Label = styled.div`
  color: ${props => props.theme.black};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  user-select: none;
  border-bottom: 1px solid ${props => props.theme.black};

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default Label;

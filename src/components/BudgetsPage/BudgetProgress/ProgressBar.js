import styled from 'styled-components';

export const ProgressBorder = styled.div`
  width: 100%;
  height: 1.5rem;
  vertical-align: middle;
  display: flex;
  align-items: center;
  border: 2px solid ${props => props.color};
  border-radius: ${props => props.theme.borderRadius};
`;

export const Progress = styled.div`
  height: 1.5rem;
  width: calc(${props => props.spend} / ${props => props.budget} * 100%);
  background-color: ${props => props.color};
  transition: width 0.3s ease-in-out;
  border-radius: ${props => props.theme.borderRadius};
`;

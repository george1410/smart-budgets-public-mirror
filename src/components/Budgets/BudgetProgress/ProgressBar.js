import styled from 'styled-components';

export const ProgressBorder = styled.div`
  width: 100%;
  vertical-align: middle;
  display: flex;
  align-items: center;
  border: 2px solid ${props => props.color};
`;

export const Progress = styled.div`
  height: 1rem;
  width: calc(${props => props.spend} / ${props => props.budget} * 100%);
  background-color: ${props => props.color};
  transition: width 0.3s ease-in-out;
`;

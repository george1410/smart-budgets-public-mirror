import styled from 'styled-components';

const CategoryTitle = styled.span`
  padding: 0.5rem 2rem;
  text-align: center;
  align-self: center;
  font-size: ${props => props.theme.fontSmall};
  color: ${props => props.theme[props.textCol]};
  background-color: ${props => props.color};
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

export default CategoryTitle;

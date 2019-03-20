import styled from 'styled-components';

const Category = styled.div`
  background-color: ${props => props.color};
  color: ${props => props.theme[props.textCol]};
  font-size: ${props => props.theme.fontSmall};
  padding: 0.5rem 1rem;
  font-weight: 500;
  text-transform: capitalize;
  border-radius: ${props => props.theme.borderRadius};
`;

export default Category;

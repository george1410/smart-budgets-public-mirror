import styled from 'styled-components';

const Category = styled.div`
  background-color: ${props => props.color};
  color: ${props => props.theme[props.textCol]};
  font-size: ${props => props.theme.fontSmall};
  padding: 2px 7px;
  font-weight: 500;
  text-transform: capitalize;
`;

export default Category;

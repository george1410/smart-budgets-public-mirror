import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  cursor: pointer;
  padding: 1.5rem 1rem;
`;

const Filter = styled.span.attrs(({ checked, theme }) => ({
  bgColor: checked ? 'transparent' : theme.primaryBlue,
  bRotate: checked ? 135 : 0,
  aRotate: checked ? -135 : 0,
  bTop: checked ? 0 : -0.8,
  aTop: checked ? 0 : 0.8,
  bWidth: checked ? 3 : 3,
  aWidth: checked ? 3 : 1,
}))`
  width: 2rem;
  height: 2px;
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  position: relative;

  &::before,
  ::after {
    content: "";
    height: 2px;
    background-color: ${props => props.theme.primaryBlue};
    position: absolute;
    transition: all 0.2s;
  }

  &::before {
    width: ${props => props.bWidth}rem;
    top: ${props => props.bTop}rem;
    transform: rotate(${props => props.bRotate}deg);
  }

  &::after {
    width: ${props => props.aWidth}rem;
    top: ${props => props.aTop}rem;
    transform: rotate(${props => props.aRotate}deg);
  }
`;

const FilterIcon = ({ checked, toggleFilters }) => (
  <Wrapper onClick={toggleFilters}>
    <Filter checked={checked} />
  </Wrapper>
);

FilterIcon.propTypes = {
  checked: PropTypes.bool.isRequired,
  toggleFilters: PropTypes.func.isRequired,
};

export default FilterIcon;

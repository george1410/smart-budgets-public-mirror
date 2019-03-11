
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  background-color: ${props => (props.show ? props.theme.white : props.theme.primaryBlue)};
  padding: 0.5rem 1rem;
  color: ${props => (props.show ? props.theme.primaryBlue : props.theme.white)};
  border: 1px solid ${props => props.theme.white};
  font-size: ${props => props.theme.fontTiny};
  font-weight: 500;
  margin: 0.5rem;
  width: max-content;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;
  text-transform: uppercase;
  ${media.tablet`
    padding: 1rem 2rem;
    text-transform: capitalize;
    background-color: ${props => (props.show ? props.theme.primaryBlue : props.theme.white)};
    color: ${props => (props.show ? props.theme.white : props.theme.primaryBlue)};
    border: 1px solid ${props => (props.show ? props.theme.white : props.theme.primaryBlue)};
    font-size: ${props => props.theme.fontSmall};
  `}
  ${media.phone`
    padding: 5px;
  `}
`;

const CategorySelector = ({
  displayName, select, ids, visible,
}) => (
  <Wrapper onClick={() => select(ids)} show={visible}>
    {displayName.toLowerCase()}
  </Wrapper>
);

CategorySelector.defaultProps = {
  displayName: 'Category',
};

CategorySelector.propTypes = {
  displayName: PropTypes.string,
  select: PropTypes.func.isRequired,
  ids: PropTypes.arrayOf(Number).isRequired,
  visible: PropTypes.bool.isRequired,
};

export default CategorySelector;

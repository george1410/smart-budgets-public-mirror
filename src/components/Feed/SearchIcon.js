import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.svg`
  align-self: center;
  height: 3rem;
  width: ${props => (props.open ? '3rem' : '0px')};
  transition: all 0.2s ease-in-out;

  & > g {
    fill: ${props => props.theme.primaryBlue};
  }
`;

const SearchIcon = ({ open }) => (
  <>
    <Icon open={open} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
      <title>Close</title>
      <g fill="#111111" stroke="none">
        <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
      </g>
    </Icon>
    <Icon open={!open} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
      <title>Search Icon</title>
      <g fill="#111111" stroke="none">
        <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z" />
      </g>
    </Icon>
  </>
);

SearchIcon.defaultProps = {
  open: false,
};

SearchIcon.propTypes = {
  open: PropTypes.bool,
};

export default SearchIcon;

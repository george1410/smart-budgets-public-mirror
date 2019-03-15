import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { on } from 'rsvp';
import media from '../../util/mediaQueries';

const Select = styled.select`
  appearance: none;
  height: 3rem;
  padding: 4px 8px;
  font-size: 1.6rem;
  border: 1px solid ${props => props.theme.primaryBlue};
  width: 5rem;
  border-radius: 0;
  background-color: ${props => props.theme.white};
  ${media.desktop`
    /* width: 18rem; */
  `}
  ${media.tablet`
    /* width: auto; */
    font-size: ${props => props.theme.fontSmall};
    padding: 0.5rem 1rem;
  `}
`;

const generateOptions = () => {
  const options = [];
  for (let i = 1; i <= 31; i += 1) {
    options.push((<option key={i} value={i}>{i}</option>));
  }
  return options;
};

const DatePicker = ({ currentStart, onPeriodChange }) => (
  <Select onChange={onPeriodChange} value={currentStart}>
    {
      generateOptions()
    }
  </Select>
);

DatePicker.propTypes = {
  // currentStart: PropTypes.string.isRequired,
  // onPeriodChange: PropTypes.func.isRequired,
};

export default DatePicker;

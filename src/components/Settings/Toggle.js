import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 3rem;
  width: 100%;
  max-width: 30rem;
  background-color: ${props => (props.bg === 'MONTH' ? props.theme.primaryBlue : props.theme.error)};
  border-radius: 100px;
  position: relative;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const Dot = styled.div`
  position: absolute;
  right: ${props => (props.align === 'MONTH' ? '3px' : 'calc(100% - 3rem + 3px)')};
  transition: all 0.5s ease-in-out;
  height: calc(3rem - 6px);
  width: calc(3rem - 6px);
  background-color: ${props => props.theme.white};
  border-radius: 100px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
`;

const Title = styled.span`
  font-size: 1.4rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.white};
`;


const Toggle = ({ value, toggle }) => (
  <Wrapper bg={value} onClick={toggle} onKeyPress={toggle} tabIndex={0}>
    <Dot align={value} />
    <Title>{value}</Title>
  </Wrapper>
);

Toggle.propTypes = {
  value: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Toggle;

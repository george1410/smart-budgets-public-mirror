import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';
import Button from '../Button/Button';
import { signout } from '../../actions/auth';
import { switchUserPeriods, updatePeriod } from '../../actions/user';
import Toggle from './Toggle';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0 5rem 0;
  height: 100vh;

  & > button {
    max-width: 41rem;
  }

  ${media.tablet`
    margin-top: 5rem;
    height: calc(100vh - 10rem);
    /* clears Header and bottom Navigation with fixed position */
    padding: 5rem 5rem;
  `}
`;

const Extender = styled.div`
  flex: 99;
`;

const Settings = ({
  startLogout,
  switchPeriod,
  periodUpdate,
  period,
}) => {
  const logout = () => {
    startLogout();
  };

  const onSwitchPeriod = () => {
    switchPeriod();
    periodUpdate();
  };


  return (
    <>
      <Header title="Settings" />
      <Wrapper>
        <Toggle value={period} toggle={onSwitchPeriod} />
        <Extender />
        <Button title="Log Out" onClick={logout} />
      </Wrapper>
    </>
  );
};

Settings.propTypes = {
  startLogout: PropTypes.func.isRequired,
  period: PropTypes.string.isRequired,
  switchPeriod: PropTypes.func.isRequired,
  periodUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  period: state.user.period,
});

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(signout()),
  switchPeriod: () => dispatch(switchUserPeriods()),
  periodUpdate: () => dispatch(updatePeriod()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

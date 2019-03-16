import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Button from '../Button/Button';
import { signout } from '../../actions/auth';
import { switchUserPeriods, updatePeriod } from '../../actions/user';
import Toggle from './Toggle/Toggle';
import Wrapper from './Wrapper';

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
        <div style={{ flex: 99 }} />
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

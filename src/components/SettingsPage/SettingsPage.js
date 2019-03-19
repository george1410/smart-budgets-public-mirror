import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Button from '../Button/Button';
import { signout } from '../../actions/auth';
import {
  switchUserPeriods,
  updatePeriod,
  pickPeriodStart,
  updatePeriodStart,
} from '../../actions/user';
import Toggle from './Toggle/Toggle';
import Wrapper from './Wrapper';
import UserCard from './UserCard/UserCard';
import DayPicker from './DayPicker';
import { SettingsRow, RowTitle } from './SettingsRow';

const Settings = ({
  startLogout,
  switchPeriod,
  periodUpdate,
  period,
  periodStart,
  user,
  pickStart,
  periodStartUpdate,
}) => {
  const logout = () => {
    startLogout();
  };

  const onSwitchPeriod = () => {
    switchPeriod();
    periodUpdate();
  };

  const onPeriodChange = (e) => {
    const day = parseInt(e.target.value, 10);
    pickStart(day);
    periodStartUpdate();
  };

  return (
    <>
      <Header title="Settings" />
      <Wrapper>
        <UserCard user={user} />
        <SettingsRow>
          <RowTitle>Budgeting Period</RowTitle>
          <Toggle value={period} toggle={onSwitchPeriod} />
        </SettingsRow>
        <SettingsRow>
          <RowTitle>Start of Period</RowTitle>
          <DayPicker
            onPeriodChange={onPeriodChange}
            currentStart={periodStart}
          />
        </SettingsRow>
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
  user: PropTypes.instanceOf(Object).isRequired,
  pickStart: PropTypes.func.isRequired,
  periodStartUpdate: PropTypes.func.isRequired,
  periodStart: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  period: state.user.period,
  user: state.user,
  periodStart: state.user.periodStart,
});

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(signout()),
  switchPeriod: () => dispatch(switchUserPeriods()),
  periodUpdate: () => dispatch(updatePeriod()),
  pickStart: day => dispatch(pickPeriodStart(day)),
  periodStartUpdate: () => dispatch(updatePeriodStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

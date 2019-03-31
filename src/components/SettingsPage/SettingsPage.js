import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { SettingsGroup, SettingsRow, RowTitle } from './SettingsRow';
import Wrapper from './Wrapper';
import {
  switchUserPeriods,
  updatePeriod,
} from '../../actions/user';
import Toggle from './Toggle/Toggle';

const SettingsPage = ({
  switchPeriod,
  periodUpdate,
  period,
}) => {
  const onSwitchPeriod = () => {
    switchPeriod();
    periodUpdate();
  };

  return (
    <>
      <Header title="Settings" back />
      <Wrapper>
        <SettingsGroup>
          <SettingsRow>
            <RowTitle>Budgeting Period</RowTitle>
            <Toggle value={period} toggle={onSwitchPeriod} />
          </SettingsRow>
        </SettingsGroup>
      </Wrapper>
    </>
  );
};

SettingsPage.propTypes = {
  period: PropTypes.string.isRequired,
  switchPeriod: PropTypes.func.isRequired,
  periodUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  period: state.user.period,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  switchPeriod: () => dispatch(switchUserPeriods()),
  periodUpdate: () => dispatch(updatePeriod()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);

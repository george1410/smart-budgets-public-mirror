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
import UserCard from './UserCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  height: 100vh;

  & > button {
    max-width: 41rem;
  }

  ${media.tablet`
    margin-top: 5rem;
    height: calc(100vh - 10rem);
    /* clears Header and bottom Navigation with fixed position */
    padding: 0 0 5rem 0;
  `}
`;

const SettingsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 4rem;
  border: 1px solid ${props => props.theme.offWhite};
  width: 40rem;
  ${media.phone`
    width: 100%;
  `}
`;

const RowTitle = styled.span`
  color: ${props => props.theme.black};
  font-size: 1.4rem;
  font-weight: 500;
`;

const Extender = styled.div`
  flex: 99;
`;

class Settings extends React.Component {
  logout = () => {
    const { startLogout } = this.props;
    startLogout();
  }

  onSwitchPeriod = () => {
    const { switchPeriod, periodUpdate } = this.props;
    switchPeriod();
    periodUpdate();
  }


  render() {
    const { period, user } = this.props;
    return (
      <>
        <Header title="Settings" />
        <Wrapper>
          <UserCard user={user} />
          <SettingsRow>
            <RowTitle>Budgeting Period</RowTitle>
            <Toggle value={period} toggle={this.onSwitchPeriod} />
          </SettingsRow>
          <Extender />
          <Button title="Log Out" onClick={this.logout} />
        </Wrapper>
      </>
    );
  }
}

Settings.propTypes = {
  startLogout: PropTypes.func.isRequired,
  period: PropTypes.string.isRequired,
  switchPeriod: PropTypes.func.isRequired,
  periodUpdate: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  period: state.user.period,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(signout()),
  switchPeriod: () => dispatch(switchUserPeriods()),
  periodUpdate: () => dispatch(updatePeriod()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

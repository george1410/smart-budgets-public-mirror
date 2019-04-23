import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signout } from '../../actions/auth';
import Achievements from './Achievements/Achievements';
import Button from '../Button/Button';
import Header from '../Header/Header';
import LinkToSettings from './LinkToSettings';
import ProfileCard from './ProfileCard/ProfileCard';
import Streak from './Streak';
import Wrapper from './Wrapper';

const Settings = ({
  startLogout,
  user,
}) => {
  const logout = () => {
    startLogout();
  };

  return (
    <>
      <Header title="You" />
      <Wrapper>
        <ProfileCard user={user} />
        <Streak streak={user.streak} info />
        <Achievements badges={user.badges} />
        <LinkToSettings />
        <Button title="Log Out" onClick={logout} logout />
      </Wrapper>
    </>
  );
};

Settings.propTypes = {
  startLogout: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  period: state.user.period,
  user: state.user,
  periodStart: state.user.periodStart,
});

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(signout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

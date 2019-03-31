import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Button from '../Button/Button';
import { signout } from '../../actions/auth';
import Wrapper from './Wrapper';
import ProfileCard from './ProfileCard/ProfileCard';
import LinkToSettings from './LinkToSettings';

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
        <LinkToSettings />
        <div style={{ flex: 99 }} />
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

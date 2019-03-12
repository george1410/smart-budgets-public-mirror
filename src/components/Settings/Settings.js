import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';
import Button from '../Button/Button';
import { signout } from '../../actions/auth';
import { switchUserPeriods, updatePeriod } from '../../actions/user';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 0 0;

  & > button {
    max-width: 41rem;
  }

  ${media.tablet`
    /* clears Header and bottom Navigation with fixed position */
    padding: 5rem 5rem;
  `}
`;

class Settings extends React.Component {
  logout = () => {
    const { startLogout } = this.props;
    startLogout();
  }

onClickSwitch = () => {
  const { switchPeriod, update } = this.props;
  switchPeriod();
  update();
}


render() {
  return (
    <>
        <Header title="Settings" />
        <Wrapper>
          <p>This will be the settings page.</p>
          <Button title="Log Out" onClick={this.logout} />
          <Button title="Switch Period" onClick={this.onClickSwitch} />
        </Wrapper>
      </>
  );
}
}

Settings.propTypes = {
  startLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(signout()),
  switchPeriod: () => dispatch(switchUserPeriods()),
  update: () => dispatch(updatePeriod()),
});

export default connect(undefined, mapDispatchToProps)(Settings);

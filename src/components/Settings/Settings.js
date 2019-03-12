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
  padding: 5rem 0 0 0;
  height: calc(100vh - 5rem);

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
    const { period } = this.props;
    return (
      <>
        <Header title="Settings" />
        <Wrapper>
          <Toggle value={period} toggle={this.onSwitchPeriod} />
          {/* <Button title="Switch Period" onClick={this.onClickSwitch} /> */}
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

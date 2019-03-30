import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Wrapper from './Wrapper';
import Title from './Title';
import BackButton from './BackButton';

const Header = ({ title, back, history }) => {
  const toPreviousPage = () => history.goBack();

  return (
    <Wrapper>
      {
        back && <BackButton action={toPreviousPage} />
      }
      <Title shift={back}>
        {title}
      </Title>
    </Wrapper>
  );
};

Header.defaultProps = {
  title: 'Title',
  back: false,
};

Header.propTypes = {
  title: PropTypes.string,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  back: PropTypes.bool,
};

export default withRouter(Header);

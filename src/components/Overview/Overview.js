import React from 'react';
import 'react-sweet-progress/lib/style.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';
import CategoryProgress from '../CategoryProgress/CategoryProgress';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.tablet`
    /* clears Header and bottom Navigation with fixed position */
    padding: 5rem 0;
  `}
`;

const Overview = ({ categories }) => (
  <>
    <Header title="Overview" />
    <Wrapper>
      {
        categories.length === 0 ? (
          <p>No categories to show</p>
        ) : (
          categories.map(
            category => (
              <CategoryProgress
                key={category.id[0]}
                {...category}
              />
            ),
          )
        )
      }
    </Wrapper>
  </>
);

Overview.defaultProps = {
  categories: [],
};

Overview.propTypes = {
  categories: PropTypes.instanceOf(Array),
};

const mapStateToProps = state => ({
  categories: state.categories,
});


export default connect(mapStateToProps)(Overview);

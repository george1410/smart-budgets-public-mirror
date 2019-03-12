import React from 'react';
import 'react-sweet-progress/lib/style.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';
import CategoryProgress from '../CategoryProgress/CategoryProgress';
import colors from '../../util/colors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  ${media.tablet`
    padding-bottom: ${props => props.theme.bottomPad};
  `}
`;

const Overview = ({ categories }) => (
  <>
    <Header title="Budgets" />
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
                color={colors[category.displayName].color}
                textCol={colors[category.displayName].text}
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
  categories: state.categories.categories,
});


export default connect(mapStateToProps)(Overview);

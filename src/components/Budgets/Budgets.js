import React from 'react';
import 'react-sweet-progress/lib/style.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import BudgetProgress from './BudgetProgress/BudgetProgress';
import colors from '../../util/colors';
import Wrapper from './Wrapper';

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
              <BudgetProgress
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

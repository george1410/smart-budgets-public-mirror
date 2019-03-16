import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  setFilterCategory,
  clearFilters,
} from '../../actions/filters';
import {
  clearTransactions, setTransactionStart, setHasMore, startSetTransactions,
} from '../../actions/transactions';
import CategoryTitle from './CategoryTitle';
import EndLabel from './EndLabel';
import LabelWrapper from './LabelWrapper';
import MainLabel from './MainLabel';
import { ProgressBorder, Progress } from './ProgressBar';
import Wrapper from './Wrapper';

const CategoryProgress = ({
  displayName,
  spend,
  budget,
  color,
  textCol,
  id,
  selectCategory,
  clear,
  clearFeed,
  setHavingMore,
  fetchTransactions,
  setStart,
  history,
}) => {
  const fetchCategories = () => {
    clearFeed();
    clear();
    selectCategory(id);
    setHavingMore();
    setStart();
    fetchTransactions(() => history.push('/feed'));
  };
  return (
    <Wrapper onClick={fetchCategories}>
      <CategoryTitle
        color={color}
        textCol={textCol}
      >
        {displayName.toLowerCase()}
      </CategoryTitle>
      <MainLabel>
        {numeral(budget - spend).format('$0,0.00')}
      </MainLabel>
      <LabelWrapper>
        <EndLabel>
          {numeral(spend).format('$0,0.00')}
        </EndLabel>
        <EndLabel>
          {numeral(budget).format('$0,0.00')}
        </EndLabel>
      </LabelWrapper>
      <ProgressBorder color={color}>
        <Progress color={color} spend={spend} budget={budget} />
      </ProgressBorder>
    </Wrapper>
  );
};

CategoryProgress.propTypes = {
  displayName: PropTypes.string.isRequired,
  spend: PropTypes.number.isRequired,
  budget: PropTypes.number.isRequired,
  id: PropTypes.instanceOf(Array).isRequired,
  setStart: PropTypes.func.isRequired,
  setHavingMore: PropTypes.func.isRequired,
  selectCategory: PropTypes.func.isRequired,
  fetchTransactions: PropTypes.func.isRequired,
  clearFeed: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  color: PropTypes.string.isRequired,
  textCol: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setStart: () => dispatch(setTransactionStart(0)),
  setHavingMore: () => dispatch(setHasMore(true)),
  selectCategory: ids => dispatch(setFilterCategory(ids)),
  fetchTransactions: cb => dispatch(startSetTransactions(cb)),
  clearFeed: () => dispatch(clearTransactions()),
  clear: () => dispatch(clearFilters()),
});

export default withRouter(connect(undefined, mapDispatchToProps)(CategoryProgress));

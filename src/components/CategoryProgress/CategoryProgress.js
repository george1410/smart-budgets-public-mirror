import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import media from '../../util/mediaQueries';
import {
  setFilterCategory,
  clearFilters,
} from '../../actions/filters';
import {
  clearTransactions, setTransactionStart, setHasMore, startSetTransactions,
} from '../../actions/transactions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 50rem;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.primaryBlueShadow};
  }

  ${media.phone`
    width: 100%;
  `}
`;

const CategoryTitle = styled.span`
  padding: 0.5rem 2rem;
  text-align: center;
  align-self: center;
  font-size: ${props => props.theme.fontSmall};
  color: ${props => props.theme.white};
  background-color: ${props => props.color};
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: baseline;
`;

const LabelEnd = styled.span`
  font-size: ${props => props.theme.fontSmall};
  color: ${props => props.theme.grey};
  flex: 1;
  font-weight: 500;

  &:last-of-type {
    text-align: end;
  }
`;

const LabelMain = styled.span`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontMedium};
  text-align: center;
  align-self: stretch;
`;

const ProgressBar = styled.div`
  width: 100%;
  vertical-align: middle;
  display: flex;
  align-items: center;
  border: 2px solid ${props => props.color};
`;

const Progress = styled.div`
  height: 1rem;
  width: calc(${props => props.spend} / ${props => props.budget} * 100%);
  background-color: ${props => props.color};
  transition: width 0.3s ease-in-out;
`;

class CategoryProgress extends React.PureComponent {
  fetchCategories = () => {
    const {
      id, selectCategory, clear, clearFeed, setHavingMore, setStart,
      fetchTransactions, history,
    } = this.props;
    clearFeed();
    clear();
    selectCategory(id);
    setHavingMore();
    setStart();
    fetchTransactions(() => history.push('/feed'));
  }

  render() {
    const {
      displayName, spend, budget, color,
    } = this.props;
    return (
      <Wrapper onClick={this.fetchCategories}>
        <CategoryTitle color={color}>{displayName.toLowerCase()}</CategoryTitle>
        <LabelMain>
          {numeral(budget - spend).format('$0,0.00')}
        </LabelMain>
        <LabelWrapper>
          <LabelEnd>
            {numeral(spend).format('$0,0.00')}
          </LabelEnd>
          <LabelEnd>
            {numeral(budget).format('$0,0.00')}
          </LabelEnd>
        </LabelWrapper>
        <ProgressBar color={color}>
          <Progress spend={spend} budget={budget} />
        </ProgressBar>
      </Wrapper>
    );
  }
}

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

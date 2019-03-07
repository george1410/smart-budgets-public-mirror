import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SelectCategory from './SelectCategory';
import media from '../../util/mediaQueries';
import {
  setFilterCategory, setStartDate, setEndDate, toggleFilterDrawer,
  clearFilters,
} from '../../actions/filters';
import {
  clearTransactions, setTransactionStart, setHasMore, startSetTransactions,
} from '../../actions/transactions';

/*
Calculations for CSS:
  Transaction has width of 50rem;
  gutter between the filter component and the list is 2 rem
  on screens > 992px the list will be centered, otherwise:
    the half of (100vw - filter - gutter - list) will be
    left and right margins. i.e.:
    vw > 992px:
    max:30rem-2rem-centered Transactions list
    Desktop:
    marginLeft-20rem-2rem-50rem-marginRight
    Tablet:
    Filter component occupies "full screen"
 */

const Wrapper = styled.div`
  display: flex;
  right: calc((100vw - 50rem) / 2 + 52rem);
  margin-left: 2rem;
  top: 10rem;
  position: absolute;
  width: calc((100vw - 58rem) / 2);
  max-width: 30rem;
  flex-direction: column;
  background-color: ${props => props.theme.primaryBlue};
  padding: 1rem;
  align-items: center;
  justify-content: flex-end;
  height: auto;
  ${media.desktop`
    top: 23rem;
    right: calc((100vw - 72rem) / 2 + 52rem);
    width: 20rem;
    margin-left: calc((100vw - 72rem) / 2);
  `}
  ${media.tablet`
    width: 100vw;
    right: auto;
    margin-left: auto;
    max-width: 100%;
    padding: 1rem 5rem;
    opacity: ${props => (props.visible ? '1' : '0')};
    background-color: ${props => props.theme.white};
    transition: all 0.3s ease-in-out;
    position: fixed;
    height: ${props => (props.visible ? 'calc(100vh - 10rem)' : '0')};
    top: auto;
    bottom: 5rem;
    & * {
      visibility: ${props => (props.visible ? 'visible' : 'hidden')};
    }
  `}
`;

const Group = styled.div`
  display: flex;
  flex-direction: ${props => (props.col ? 'column' : 'row')};
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.div`
  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme.white};
  margin-bottom: 1rem;
  user-select: none;
  ${media.tablet`
    color: ${props => props.theme.black};
  `}
`;

const GroupName = styled.div`
  font-size: ${props => props.theme.fontSmall};
  width: 100%;
  padding-bottom: 2px;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.white};
  color: ${props => props.theme.white};
  user-select: none;
  ${media.tablet`
    border-bottom: 1px solid ${props => props.theme.offWhite};
    color: ${props => props.theme.black};
  `}
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${props => props.theme.fontSmall};
  padding: 0.5rem 0;
  color: ${props => props.theme.white};
  ${media.tablet`
    color: ${props => props.theme.black};
  `}
`;

const DatePicker = styled.input`
  padding: 4px 8px;
  font-size: 1.6rem;
  border: 1px solid ${props => props.theme.primaryBlue};
  margin-top: 0.5rem;
  width: 90%;
  ${media.desktop`
    width: 18rem;
  `}
  ${media.tablet`
    width: auto;
    font-size: ${props => props.theme.fontSmall};
    padding: 0.5rem 1rem;
  `}
`;

const Apply = styled.button`
  font-size: ${props => props.theme.fontSmall};
  font-weight: 500;
  border: 1px solid ${props => props.theme.primaryBlue};
  background-color: ${props => props.theme.primaryBlue};
  color: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.white};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline-color: white;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  user-select: none;
  ${media.tablet`
    font-size: ${props => props.theme.fontMedium};
    outline-color: -webkit-focus-ring-color;
    padding: 0.5rem 2rem;
    border: 1px solid ${props => props.theme.white};
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.primaryBlue};
    border-bottom: 1px solid ${props => props.theme.primaryBlue};
  `}

  &:active {
    transform: translateY(2px);
  }
`;

const ClearFiltersButton = styled.button`
  font-size: ${props => props.theme.fontTiny};
  font-weight: 500;
  border: 1px solid ${props => props.theme.offWhite};
  background-color: ${props => props.theme.primaryBlue};
  color: ${props => props.theme.offWhite};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline-color: white;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  user-select: none;
  ${media.tablet`
    font-size: ${props => props.theme.fontSmall};
    outline-color: -webkit-focus-ring-color;;
    padding: 0.5rem 2rem;
    color: ${props => props.theme.error};
    border: 1px solid ${props => props.theme.error};
    background-color: ${props => props.theme.white};
  `}

  &:active {
    transform: translateY(2px);
  }
`;

class FilterDrawer extends React.PureComponent {
  constructor(props) {
    super(props);
    const { startDate, endDate } = this.props;
    this.state = {
      start: startDate,
      end: endDate,
    };
  }

  onStartDateChange = (e) => {
    const date = e.target.value;
    this.setState(() => ({
      start: date,
    }));
  }

  onEndDateChange = (e) => {
    const date = e.target.value;
    this.setState(() => ({
      end: date,
    }));
  }

  onApplyFilters = () => {
    const {
      clearFeed,
      setStart,
      setHavingMore,
      fetchTransactions,
      toggleFilters,
      setDateStart,
      setDateEnd,
    } = this.props;
    const { start, end } = this.state;
    setDateStart(start);
    setDateEnd(end);
    clearFeed();
    setStart();
    setHavingMore();
    fetchTransactions();
    toggleFilters();
  }

  onClear = () => {
    const {
      clear, endDate, fetchTransactions, clearFeed, setStart, setHavingMore,
    } = this.props;
    clear();
    this.setState(() => ({
      start: '',
      end: endDate,
    }));
    clearFeed();
    setStart();
    setHavingMore();
    fetchTransactions();
  }

  render() {
    const {
      visible, categories, selectCategory, shownCategories,
    } = this.props;
    const { start, end } = this.state;
    return (
      <Wrapper visible={visible}>
        <Title>Filter</Title>
        <GroupName>Date</GroupName>
        <Group col>
          <Label>
            StartDate
            <DatePicker type="date" value={start} onChange={this.onStartDateChange} />
          </Label>
          <Label>
            EndDate
            <DatePicker type="date" value={end} onChange={this.onEndDateChange} />
          </Label>
        </Group>
        <GroupName>Categories</GroupName>
        <Group>
          {
            categories.map(category => (
              <SelectCategory
                key={category.id[0]}
                displayName={category.displayName}
                select={selectCategory}
                ids={category.id}
                visible={shownCategories.includes(category.id[0])}
              />
            ))
          }
        </Group>
        <Apply type="button" onClick={this.onApplyFilters}>Apply Filters</Apply>
        <ClearFiltersButton type="button" onClick={this.onClear}>Clear Filters</ClearFiltersButton>
      </Wrapper>
    );
  }
}

FilterDrawer.defaultProps = {
  visible: false,
  categories: [],
  shownCategories: [],
  startDate: '',
  endDate: '',
};

FilterDrawer.propTypes = {
  visible: PropTypes.bool,
  categories: PropTypes.instanceOf(Array),
  selectCategory: PropTypes.func.isRequired,
  shownCategories: PropTypes.instanceOf(Array),
  setDateEnd: PropTypes.func.isRequired,
  setDateStart: PropTypes.func.isRequired,
  clearFeed: PropTypes.func.isRequired,
  setStart: PropTypes.func.isRequired,
  setHavingMore: PropTypes.func.isRequired,
  fetchTransactions: PropTypes.func.isRequired,
  toggleFilters: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

const mapStateToProps = state => ({
  startDate: state.filters.startDate,
  endDate: state.filters.endDate,
  visible: state.filters.filterDrawerOpen,
  categories: state.categories.categories,
  shownCategories: state.filters.shownCategories,
});

const mapDispatchToProps = dispatch => ({
  selectCategory: ids => dispatch(setFilterCategory(ids)),
  setDateStart: date => dispatch(setStartDate(date)),
  setDateEnd: date => dispatch(setEndDate(date)),
  clearFeed: () => dispatch(clearTransactions()),
  setStart: () => dispatch(setTransactionStart(0)),
  setHavingMore: () => dispatch(setHasMore(true)),
  fetchTransactions: () => dispatch(startSetTransactions()),
  toggleFilters: () => dispatch(toggleFilterDrawer()),
  clear: () => dispatch(clearFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDrawer);

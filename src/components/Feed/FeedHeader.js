import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import media from '../../util/mediaQueries';
import SearchIcon from './SearchIcon';
import { toggleSearchDrawer, toggleFilterDrawer } from '../../actions/filters';

const Wrapper = styled.header`
  height: 5rem;
  position: fixed;
  width: 100vw;
  background-color: ${props => props.theme.white};
  box-shadow: 0 1px 0 ${props => props.theme.shadowCol};
  display: none;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  z-index: 6;
  ${media.tablet`
    display: flex;
    top: 0;
  `}
`;

const Title = styled.span`
  color: ${props => props.theme.primaryBlue};
  font-size: ${props => props.theme.fontSmall};
  user-select: none;
`;

const Filter = styled.div`
  cursor: pointer;
  padding: 1.5rem 1rem;
`;

const FilterIcon = styled.span.attrs(({ checked, theme }) => ({
  bgColor: checked ? 'transparent' : theme.primaryBlue,
  bRotate: checked ? 135 : 0,
  aRotate: checked ? -135 : 0,
  bTop: checked ? 0 : -0.8,
  aTop: checked ? 0 : 0.8,
  bWidth: checked ? 3 : 3,
  aWidth: checked ? 3 : 1,
}))`
  width: 2rem;
  height: 2px;
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  position: relative;

  &::before,
  ::after {
    content: "";
    height: 2px;
    background-color: ${props => props.theme.primaryBlue};
    position: absolute;
    transition: all 0.2s;
  }

  &::before {
    width: ${props => props.bWidth}rem;
    top: ${props => props.bTop}rem;
    transform: rotate(${props => props.bRotate}deg);
  }

  &::after {
    width: ${props => props.aWidth}rem;
    top: ${props => props.aTop}rem;
    transform: rotate(${props => props.aRotate}deg);
  }
`;

const Search = styled.div`
  cursor: pointer;
`;

const FeedHeader = ({
  toggleFilters, filterOpen, searchOpen, toggleSearch,
}) => (
  <>
    <Wrapper>
      <Search onClick={toggleSearch}>
        <SearchIcon open={searchOpen} />
      </Search>
      <Title>
        Transactions
      </Title>
      <Filter onClick={toggleFilters}>
        <FilterIcon checked={filterOpen} />
      </Filter>
    </Wrapper>
  </>
);

FeedHeader.defaultProps = {
  searchOpen: false,
  filterOpen: false,
};

FeedHeader.propTypes = {
  searchOpen: PropTypes.bool,
  filterOpen: PropTypes.bool,
  toggleSearch: PropTypes.func.isRequired,
  toggleFilters: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  searchText: state.filters.textFilter,
  searchOpen: state.filters.searchDrawerOpen,
  filterOpen: state.filters.filterDrawerOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleSearch: () => dispatch(toggleSearchDrawer()),
  toggleFilters: () => dispatch(toggleFilterDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedHeader);

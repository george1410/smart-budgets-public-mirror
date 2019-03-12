import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import media from '../../util/mediaQueries';
import { setTextFilter, toggleSearchDrawer } from '../../actions/filters';
import {
  clearTransactions, setTransactionStart, setHasMore, startSetTransactions,
} from '../../actions/transactions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  left: calc((100vw - 50rem) / 2 + 52rem);
  top: 10rem;
  position: absolute;
  width: calc((100vw - 58rem) / 2);
  max-width: 30rem;
  margin-right: 2rem;
  align-items: center;
  background-color: ${props => props.theme.primaryBlue};
  padding: 2rem;
  justify-content: space-around;
  height: 11rem;
  z-index: 5;
  outline-color: white;
  ${media.desktop`
    margin-left: 0;
    margin-right: 2rem;
    right: calc((100vw - 50rem) / 2 + 52rem);
    left: calc((100vw - 72rem) / 2);
    width: 20rem;
  `}
  ${media.tablet`
    padding: 0;
    left: auto;
    height: ${props => (props.open ? '11' : '0')}rem;
    right: auto;
    margin-left: auto;
    max-width: 100%;
    top: 5rem;
    width: 100vw;
    background-color: ${props => props.theme.white};
    box-shadow: 0 1px 5px ${props => props.theme.primaryBlue};
    transition: all 0.3s ease-in;
    & * {
      opacity: ${props => (props.open ? '1' : '0')};
      visibility: ${props => (props.open ? 'visible' : 'hidden')};
    }
  `}
`;

const InputLine = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  outline-color: white;
  border: 1px solid ${props => props.theme.primaryBlue};
  width: 100%;
  padding: 4px 8px;
  font-size: 1.6rem;
  border-radius: 0;
  margin-left: 4rem;

  ::placeholder {
    color: ${props => props.theme.grey};
    opacity: 1;
  }

  ${media.desktop`
    width: 15rem;
  `}
  ${media.tablet`
    padding: 1rem 1.5rem;
    border: 1px solid ${props => props.theme.primaryBlue};
    font-size: ${props => props.theme.fontSmall};
    width: 80%;
    max-width: 40rem;
    outline-color: -webkit-focus-ring-color;
    ::placeholder {
      color: ${props => props.theme.greyLight};
      opacity: 1;
    }
  `}
`;

const SearchButton = styled.button`
  font-size: ${props => props.theme.fontSmall};
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.theme.primaryBlue};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.primaryBlue};
  border-bottom: 1px solid ${props => props.theme.white};
  cursor: pointer;
  outline-color: white;
  font-weight: 500;
  transition: all 0.1s ease-in-out;
  user-select: none;
  ${media.tablet`
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.primaryBlue};
    border: 1px solid ${props => props.theme.primaryBlue};
    outline-color: -webkit-focus-ring-color;

  `}

  &:active {
    transform: translateY(2px);
  }
`;

const Clear = styled.button`
  background-color: ${props => props.theme.primaryBlue};
  border: none;
  padding: 0;
  cursor: pointer;
  outline-color: white;
  ${media.tablet`
    background-color: ${props => props.theme.white};
    margin-left: 1rem;
    outline-color: -webkit-focus-ring-color;
  `}
`;

const Icon = styled.svg`
  height: 3rem;

  & > g {
    fill: ${props => props.theme.white};
    ${media.tablet`
      fill: ${props => props.theme.primaryBlue};
    `}
  }
`;

class SearchDrawer extends React.PureComponent {
  onSearchChange = (e) => {
    const { setSearchText } = this.props;
    const searchText = e.target.value;
    setSearchText(searchText);
  }

  clearInput = () => {
    const {
      setSearchText, clearFeed, setStart, setHavingMore, fetchTransactions, value,
    } = this.props;
    if (value !== '') {
      setSearchText('');
      clearFeed();
      setStart();
      setHavingMore();
      fetchTransactions();
    }
  }

  onSearchSubmit = () => {
    const {
      clearFeed, setStart, setHavingMore, fetchTransactions, toggleSearch,
    } = this.props;
    toggleSearch();
    clearFeed();
    setStart();
    setHavingMore();
    fetchTransactions();
  }

  render() {
    const {
      searchOpen, searchText,
    } = this.props;
    return (
      <Wrapper open={searchOpen}>
        <InputLine>
          <Input type="text" value={searchText} placeholder="Search" onChange={this.onSearchChange} />
          <Clear onClick={this.clearInput}>
            <Icon open={searchOpen} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
              <title>Close</title>
              <g fill="#111111" stroke="none">
                <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
              </g>
            </Icon>
          </Clear>
        </InputLine>
        <SearchButton type="button" onClick={this.onSearchSubmit}>Search</SearchButton>
      </Wrapper>
    );
  }
}

SearchDrawer.defaultProps = {
  searchText: '',
  searchOpen: false,
  value: '',
};

SearchDrawer.propTypes = {
  searchOpen: PropTypes.bool,
  searchText: PropTypes.string,
  clearFeed: PropTypes.func.isRequired,
  setStart: PropTypes.func.isRequired,
  setHavingMore: PropTypes.func.isRequired,
  toggleSearch: PropTypes.func.isRequired,
  fetchTransactions: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
  value: PropTypes.string,
};

const mapStateToProps = state => ({
  searchText: state.filters.textFilter,
  searchOpen: state.filters.searchDrawerOpen,
  value: state.filters.textFilter,
});

const mapDispatchToProps = dispatch => ({
  setSearchText: text => dispatch(setTextFilter(text)),
  clearFeed: () => dispatch(clearTransactions()),
  setStart: () => dispatch(setTransactionStart(0)),
  setHavingMore: () => dispatch(setHasMore(true)),
  fetchTransactions: () => dispatch(startSetTransactions()),
  toggleSearch: () => dispatch(toggleSearchDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchDrawer);

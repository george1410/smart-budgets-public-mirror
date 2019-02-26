import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../util/mediaQueries';

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
  z-index: 2;
  ${media.tablet`
    display: flex;
    top: 0;
  `}
`;

const Title = styled.span`
  color: ${props => props.theme.primaryBlue};
  font-size: ${props => props.theme.fontSmall};
`;

const Search = styled.div`
  color: salmon;
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

const FeedHeader = ({ title, toggleDrawer, drawerOpen }) => (
  <Wrapper>
    <Search>Search</Search>
    <Title>
      {title}
    </Title>
    <Filter onClick={toggleDrawer}>
      <FilterIcon checked={drawerOpen} />
    </Filter>
  </Wrapper>
);

FeedHeader.defaultProps = {
  title: 'Title',
  drawerOpen: false,
};

FeedHeader.propTypes = {
  title: PropTypes.string,
  drawerOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func.isRequired,
};

export default FeedHeader;

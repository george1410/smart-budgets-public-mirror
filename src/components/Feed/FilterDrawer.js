import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SelectCategory from './SelectCategory';
import media from '../../util/mediaQueries';
import { setFilterCategory } from '../../actions/filters';

const Wrapper = styled.div`
  display: flex;
  left: 5vw;
  top: 10rem;
  position: absolute;
  width: 20vw;
  flex-direction: column;
  background-color: ${props => props.theme.primaryBlue};
  padding: 1rem 0;
  align-items: center;
  justify-content: flex-end;
  height: auto;
  ${media.tablet`
    visibility: ${props => (props.visible ? 'visible' : 'hidden')};
    opacity: ${props => (props.visible ? '100' : '0')};
    background-color: ${props => props.theme.white};
    transition: all 0.3s ease-in-out;
    position: fixed;
    width: 100%;
    height: calc(100vh - 10rem);
    top: auto;
    left: auto;
    bottom: 5rem;
  `}
`;

const Group = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.div`
  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme.white};
  margin-bottom: 1rem;
  ${media.tablet`
    color: ${props => props.theme.black};
  `}
`;

const GroupName = styled.div`
  font-size: ${props => props.theme.fontSmall};
  border-bottom: 1px solid ${props => props.theme.white};
  color: ${props => props.theme.white};
  ${media.tablet`
    color: ${props => props.theme.black};
    border-bottom: 1px solid ${props => props.theme.black};
  `}
`;

const Apply = styled.button`
  outline: none;
  font-size: ${props => props.theme.fontSmall};
  border: 1px solid ${props => props.theme.primaryBlue};
  background-color: ${props => props.theme.primaryBlue};
  color: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.white};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  user-select: none;
  ${media.tablet`
    font-size: ${props => props.theme.fontMedium};
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

const FilterDrawer = ({
  visible, categories, selectCategory, shownCategories,
}) => (
  <Wrapper visible={visible}>
    <Title>Filter</Title>
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
    <Apply type="button">Apply Filter</Apply>
  </Wrapper>
);

FilterDrawer.defaultProps = {
  visible: false,
  categories: [],
  shownCategories: [],
};

FilterDrawer.propTypes = {
  visible: PropTypes.bool,
  categories: PropTypes.instanceOf(Array),
  selectCategory: PropTypes.func.isRequired,
  shownCategories: PropTypes.instanceOf(Array),
};

const mapStateToProps = state => ({
  visible: state.filters.drawerOpen,
  categories: state.categories,
  shownCategories: state.filters.shownCategories,
});

const mapDispatchToProps = dispatch => ({
  selectCategory: ids => dispatch(setFilterCategory(ids)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDrawer);

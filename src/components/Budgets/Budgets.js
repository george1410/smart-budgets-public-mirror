import React from 'react';
import 'react-sweet-progress/lib/style.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';
import Button from '../Button/Button';
import CategoryProgress from '../CategoryProgress/CategoryProgress';
import { sortByPeriod } from '../../actions/filters';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  ${media.tablet`
    padding-bottom: ${props => props.theme.bottomPad};
  `}
`;

//sortByPeriod = () => {
 // const { startSwitch } = this.props;
 // startSwitch();
//}

const Overview = ({ categories }) => (
  <>
    <Header title="Budgets" />
    <Wrapper>
    <Button title="Change Filter"  />
    
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
  categories: state.categories.categories,
});


export default connect(mapStateToProps)(Overview);

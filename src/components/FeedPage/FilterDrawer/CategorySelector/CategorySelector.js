import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

const CategorySelector = ({
  displayName,
  select,
  ids,
  visible,
}) => (
  <Wrapper
    tabIndex={0}
    onClick={() => select(ids)}
    onKeyPress={() => select(ids)}
    show={visible}
  >
    {displayName.toLowerCase()}
  </Wrapper>
);

CategorySelector.defaultProps = {
  displayName: 'Category',
};

CategorySelector.propTypes = {
  displayName: PropTypes.string,
  select: PropTypes.func.isRequired,
  ids: PropTypes.arrayOf(Number).isRequired,
  visible: PropTypes.bool.isRequired,
};

export default CategorySelector;

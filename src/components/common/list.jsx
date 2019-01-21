import React from 'react';
import PropTypes from 'prop-types';
import style from './list.scss';

const List = ({ items, itemElement }) => {
  const createItem = (item, index) =>
    React.createElement(itemElement, { item, index, key: item.id });
  return <ul className={style.list}>{items.map(createItem)}</ul>;
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  itemElement: PropTypes.func.isRequired,
};

export default List;

import React from 'react';
import { Link } from 'react-router';

const FilterLink = ({ filter, text }) => {
  return (
    <Link
      to={filter === 'all' ? '/' : filter}
      className="filter"
      activeClassName="filter active">
      {text}
    </Link>
  );
}

export default FilterLink;

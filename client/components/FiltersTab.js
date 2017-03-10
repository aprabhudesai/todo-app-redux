import React from 'react';
import FilterLink from './FilterLink';

const FiltersTab = () => {
  return (
    <div className="todo-filters">
      <FilterLink filter="all" text="All" />
      { ' | ' }
      <FilterLink filter="completed" text="Completed" />
      { ' | ' }
      <FilterLink filter="active" text="Active" />
    </div>
  );
};

export default FiltersTab;

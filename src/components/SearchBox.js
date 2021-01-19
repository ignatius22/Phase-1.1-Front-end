import React from 'react';


const SearchBox = ({ searchChange }) => (
  <div className="pa2">
    <input
      data-testid="input"
      className="pa3 ba b--green bg-lightest-blue"
      type="search"
      placeholder="search your chicken"
      onChange={searchChange}
    />
  </div>
);


export default SearchBox;

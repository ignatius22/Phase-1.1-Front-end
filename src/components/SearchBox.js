import React from 'react';


const SearchBox = ({ searchChange }) => (
  <div className="pa2 border-round">
    <input
      data-testid="input"
      className="pa3 ba b--green bg-lightest-blue"
      type="search"
      placeholder="search user info"
      onChange={searchChange}
    />
  </div>
);


export default SearchBox;

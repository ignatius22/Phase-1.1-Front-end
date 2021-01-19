import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setSearchField, requestProfiles } from '../redux/action';

// import CardList from '../components/CardList';
// import SearchBox from '../components/SearchBox';

import './App.css';
// import Detailed from '../components/Detailed';

const mapStateToProps = (state) => ({
  searchField: state.searchProfile.searchField,
  profiles: state.requestProfiles.profiles,
  isPending: state.requestProfiles.isPending,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestProfiles: () => dispatch(requestProfiles()),
});

const App = ({
  profiles,
  searchField,
  onSearchChange,
  isPending,
  onRequestProfiles,
}) => {
  const filteredRecipes = profiles.filter((recipe) =>
    recipe.URL.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    onRequestProfiles();
  }, []);

  return (
    <div className="tc">
      <h1 className="f1">Munch It</h1>
      <h1>hello</h1>
    </div>
  );
};

// App.propTypes = {
//   onSearchChange: PropTypes.func.isRequired,
//   recipes: PropTypes.instanceOf(Array).isRequired,
//   isPending: PropTypes.bool.isRequired,
//   searchField: PropTypes.string.isRequired,
//   onRequestRecipes: PropTypes.func.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);

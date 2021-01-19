import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import './App.css';
import { requestProfiles, setSearchProfiles } from '../redux/reducer';


const mapStateToProps = (state) => ({
  searchField: state.setSearchProfiles.setSearchProfiles,
  profiles: state.requestProfiles.requestProfiles,
  isPending: state.requestProfiles.isPending,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchProfiles(event.target.value)),
  onRequestProfiles: () => dispatch(requestProfiles()),
});

const App = ({
  profiles,
  searchField,
  onSearchChange,
  isPending,
  onRequestProfiles,
}) => {
  const filteredProfiles = profiles.filter((profile) =>
    profile.profile.gender.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    onRequestProfiles();
  }, []);

  return (
  
      <div className="tc">
        <h1 className="f1">Munch It</h1>
    
          <div>
            <SearchBox searchChange={onSearchChange} />
            {isPending ? (
              <h1>Loading</h1>
            ) : (
              <CardList recipes={filteredProfiles} />
            )}
          </div>
        
      
      </div>
  
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

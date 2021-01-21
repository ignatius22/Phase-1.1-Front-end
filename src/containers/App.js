import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { setSearchField, requestProfiles } from '../redux/action';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import './App.css';
import { Pagination } from '../components/Pagination';
// import Detailed from '../components/Detailed';

const mapStateToProps = (state) => ({
  searchField: state.searchProfile.searchField,
  profiles: state.requestProfiles.profiles,
  isPending: state.requestProfiles.isPending,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value),console.log(event)),
  onRequestProfiles: () => dispatch(requestProfiles()),
});

const App = ({
  profiles,
  searchField,
  onSearchChange,
  isPending,
  onRequestProfiles,
}) => {

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(20);

  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  


  const filteredProfiles = profiles.filter(
    (recipe) =>
      recipe.PaymentMethod.toLowerCase().includes(searchField.toLowerCase()) ||
      recipe.Gender.toLowerCase().includes(searchField.toLowerCase()),
      
  ).slice(indexOfFirstPost,indexOfLastPost)



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
            <>
             <CardList profiles={filteredProfiles} />
              <Pagination postPerPage={postPerPage} totalPost={profiles.length} />
            </>
        )}
        
      </div>
    </div>
  );
};



export default connect(mapStateToProps, mapDispatchToProps)(App);

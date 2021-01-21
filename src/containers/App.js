import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { setSearchField, requestProfiles } from '../redux/action';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import './App.css';
import Pagination  from '../components/Pagination';


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
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(20);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const paginate = (pageNumer) => setCurrentPage(pageNumer);

  const filteredProfiles = profiles
    .filter(
      (recipe) =>
        recipe.PaymentMethod.toLowerCase().includes(
          searchField.toLowerCase()
        ) || recipe.Gender.toLowerCase().includes(searchField.toLowerCase())
    )
    .slice(indexOfFirstPost, indexOfLastPost);



  useEffect(() => {
    onRequestProfiles();
  }, []);

  return (
    <div className="tc">
      <h1 className="display-4 text-warning font-weight-bold">Users Data</h1>

      <div>
        <SearchBox searchChange={onSearchChange} />

        {isPending ? (
          <div class="spinner-border m-5" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <>
            <Pagination
              postPerPage={postPerPage}
              totalPost={profiles.length}
              paginate={paginate}
            />
            <CardList profiles={filteredProfiles} />
            <Pagination
              postPerPage={postPerPage}
              totalPost={profiles.length}
              paginate={paginate}
            />
          </>
        )}
      </div>
    </div>
  );
};



export default connect(mapStateToProps, mapDispatchToProps)(App);

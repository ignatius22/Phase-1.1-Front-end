import apiCall from '../api/api';

import {
  CHANGE_SEARCHFIELD,
  REQUEST_PROFILES_PENDING,
  REQUEST_PROFILES_SUCCESS,
  REQUEST_PROFILES_FAILED,
} from './actionTypes';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});

export const requestProfiles = () => (dispatch) => {
  dispatch({ type: REQUEST_PROFILES_PENDING });
  apiCall(
    'https://api.edamam.com/search?q=chicken&app_id=4e80d906&app_key=90d9ed76fe22d477f1c7c3676ed9f686&from=0&to=20'
  )
    .then((data) =>
      dispatch({ type: REQUEST_PROFILES_SUCCESS, payload: data.hits })
    )
    .catch((error) =>
      dispatch({ type: REQUEST_PROFILES_FAILED, payload: error })
    );
};

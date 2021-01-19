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
  apiCall('https://api.enye.tech/v1/challenge/records')
    .then((data) => {
      dispatch(
        { type: REQUEST_PROFILES_SUCCESS, payload: data.records.profiles },
        console.log(data.records)
      );
    })
    .catch((error) =>
      dispatch({ type: REQUEST_PROFILES_FAILED, payload: error })
    );
};

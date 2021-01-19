import {
  CHANGE_SEARCHFIELD,
  REQUEST_PROFILES_PENDING,
  REQUEST_PROFILES_SUCCESS,
  REQUEST_PROFILES_FAILED,
} from './actionTypes';

const initialStateSearch = {
  searchField: '',
};

export const searchRecipes = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateProfiles = {
  profiles: [],
  isPending: true,
};

export const requestProfiles = (state = initialStateProfiles, action = {}) => {
  switch (action.type) {
    case REQUEST_PROFILES_PENDING:
      return { ...state, isPending: true };
    case REQUEST_PROFILES_SUCCESS:
      return {
        ...state,
        profiles: action.payload,
        isPending: false,
      };
    case REQUEST_PROFILES_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

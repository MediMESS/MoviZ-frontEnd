import {
  CHANGE_PROFILE_STATUS
} from './AppConstants.js';

const initialProfileStatus = {
  profileStatus: 'unSigned'
};

export const onProfileStatusChange = (state=initialProfileStatus, action={}) => {
  if(action.type === CHANGE_PROFILE_STATUS)
    return {
      searchField: action.payload
    }
  else
    return state;
};

import {
  CHANGE_PROFILE_STATUS
} from './AppConstants.js';

export const setProfileStatus = (profileStatus) => {
  return {
    type: CHANGE_PROFILE_STATUS,
    payload: profileStatus
  }
};

import {
  CHANGE_UNSIGNED_PAGE_STATE,
  OPEN_MUST_SIGNIN_DIALOG
} from './UnSignedConstants';

const initial_unSignedPageState = {
  unSignedPageState: 'signIn'
};

export const unSignedPageStateChange = (state=initial_unSignedPageState, action={}) => {
  if(action.type === CHANGE_UNSIGNED_PAGE_STATE)
    return {
      // ...state,
      unSignedPageState: action.payload
    };
  else
    return state;
};

const initial_openMustSignInDialog = {
  openMustSignInDialog: false
};

export const mustSignInDialogChange = (state = initial_openMustSignInDialog, action={}) => {
  if(action.type === OPEN_MUST_SIGNIN_DIALOG)
    return {
      openMustSignInDialog: action.payload
    }
  else
    return state;
}

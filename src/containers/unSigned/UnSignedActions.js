import {
  CHANGE_UNSIGNED_PAGE_STATE,
  OPEN_MUST_SIGNIN_DIALOG
} from './UnSignedConstants';


export const setUnSignedPageState = (current_unsigned_page_state) => {
  return {
    type: CHANGE_UNSIGNED_PAGE_STATE,
    payload: current_unsigned_page_state
  }
};

export const setOpenMustSignInDialog = (isOpenMustSignInDialog) => {
  return {
    type: OPEN_MUST_SIGNIN_DIALOG,
    payload: isOpenMustSignInDialog
  }
}

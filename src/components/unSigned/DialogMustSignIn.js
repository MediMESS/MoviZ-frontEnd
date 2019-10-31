import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DialogMustSignIn = ({open, onUnsignedOpenBlog}) => {
    return (
      <div>
        <Dialog
          open={open}
          onClose={() => {onUnsignedOpenBlog('false')}}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Undefined User"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You must be <span style={{color:'red', fontWeight:'800'}}>Signed In</span> to acess the BLOG!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {onUnsignedOpenBlog(false)}} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default DialogMustSignIn;

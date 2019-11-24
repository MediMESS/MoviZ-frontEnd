import React from 'react';
import { Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const ITEM_HEIGHT = 48;

const MovizCategorie = ({options, genre, updateGenre, errorGenre}) => {
  console.log("erorGEnre MOVIZ CATEGORIE", errorGenre, genre);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{margin:'0 20px'}}
      >
        {genre}
        <MoreVertIcon />
      </Button>
      {errorGenre
      ?<div style={{color: 'red', paddingTop:'2px'}}>
          {"Choose Genre"}
        </div>
      :<></>}
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
            fontWeight: 800,
          },
        }}
      >
        {options.map(option => (
          <MenuItem
            key={option}
            onClick={() => {handleClose(); updateGenre(option)}}>
            {option}
          </MenuItem>
        ))}
      </Menu>
  </div>
);
}

export default MovizCategorie;

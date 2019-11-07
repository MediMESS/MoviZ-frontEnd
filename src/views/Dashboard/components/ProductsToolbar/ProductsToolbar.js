import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import { SearchInput } from 'components';
import {MovizCategorie} from '../MovizCategorie';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  categorie: {
    marginRight: theme.spacing(3)
  },
  searchInput: {
    flexGrow: 1,
  }
}));

const ProductsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search Movie"
        />
        <MovizCategorie className={classes.categorie}/>
        <Button
          color="primary"
          variant="contained"
          style={{width: '200px', height: '100%'}}
        >
          Search
        </Button>

      </div>
    </div>
  );
};

ProductsToolbar.propTypes = {
  className: PropTypes.string
};

export default ProductsToolbar;

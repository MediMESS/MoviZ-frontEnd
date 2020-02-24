import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {MovizCard } from 'views/Dashboard/components';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  Grid,
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    backgroundColor: theme.palette.secondary.main,
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'flex-start',

  },
  avatar: {
    marginRight: theme.spacing(2),
    width: '150px',
    height: 'auto',
    borderRadius: '30%',
    transition: '.5s all',
    '&:hover': {
      height: 'auto',
      width: '100%',
      flexGrow: '1',
      borderRadius: '0',
    }
  },
  grid: {
    display: 'flex',
    flexFlow:'column wrap',
    alignItems: 'center',
    justifyContent:'center',
    padding: '20px 10px 10px 10px',
    borderBottom: '1px solid white',
    '&:hover':{
      // backgroundColor:theme.palette.primary.light,
      backgroundColor:'#0A5FED',
    },
  },
  title:{
    color: theme.palette.primary.light,
  },
  actions: {
    justifyContent: 'flex-end'
  },
}));

const UsersTable = props => {
  const { className, users, ...rest } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };
  let i = 0;
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
        <Grid
          container
          className={classes.inner}

          >
          {users.map(product => (
          <Grid
            item
            key={product.id}
            lg={3}
            md={4}
            sm={6}
            xs={12}
            className={classes.grid}
            >
                <img

                  alt="Product"
                  src={product.imageUrl}
                  className={classes.avatar}
                />
              <Typography
                align="center"
                variant="h3"
                gutterBottom
                className={classes.title}
              >
                {product.title}
              </Typography>
            </Grid>
          ))}
          </Grid>
          <div className={classes.inner}>
            <Table>
              <TableBody>
                {
                  users.slice(0, rowsPerPage).map(user => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={user.id}
                  >
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <img
                          className={classes.avatar}
                          src={user.imageUrl}
                        />
                        <Typography
                          gutterBottom
                          variant="h3"
                          className={classes.likes}
                        >
                          {"MoviZ LIKED"}
                        </Typography>
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className={classes.nameContainer}>
                        <img
                          className={classes.avatar}
                          src={user.imageUrl}
                        />
                        <Typography
                          gutterBottom
                          variant="h3"
                          className={classes.likes}
                        >
                          {"MoviZ LIKED"}
                        </Typography>
                      </div>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={users.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default UsersTable;

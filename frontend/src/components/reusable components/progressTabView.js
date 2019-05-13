import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
import ProgressTable from './table';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 10,
    margin: 'auto',
    maxWidth: 600,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function ProgressTabView(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <ProgressTable />
      </Paper>
    </div>
  );
}

ProgressTabView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgressTabView);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, number, percent, comments) {
  id += 1;
  return { name, number, percent,comments };
}

const rows = [
  createData('Grammar', 15, 66, 'Need to learn verb tenses'),
  createData('Pronunciation',7, 9, 'Practice using words in simple sentences first'),
  createData('Content Structure', 26, 78, 'Use STAR approach'),
  createData('Vocal Variety', 3, 33, 'Stress on key words'),
  createData('Filler words', 35, 45, 'Better than last time'),
];

function ProgressTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Parameters</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right"> Improvement (%)</TableCell>
            <TableCell align="right"> Tutor Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
                <TableCell align="right">{row.number}</TableCell>
                <TableCell align="right">{row.percent}</TableCell>
                <TableCell align="right">{row.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

ProgressTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgressTable);

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
function createData(name, questions) {
  id += 1;
  return {name, questions };
}

const rows = [
  createData('Work Experience Based', 4),
  createData('Case Based', 2),
  createData('Aptitude and Reasoning Based', 3),
  createData('Cupcake', 4),
  createData('Gingerbread', 5),
];

function ProgressTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Question Categories</TableCell>
            <TableCell align="right">Progress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.questions}</TableCell>

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

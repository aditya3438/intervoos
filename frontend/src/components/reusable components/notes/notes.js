import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class UserNotes extends React.Component {

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        

        <TextField
          id="standard-full-width"
          label="Grammar"
          style={{ margin: 8 }}
          placeholder="Type here"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="standard-full-width"
          label="Pronunciation"
          style={{ margin: 8 }}
          placeholder="Type here"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="standard-full-width"
          label="Content Structure"
          style={{ margin: 8 }}
          placeholder="Type here"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
          shrink: true,
                }}
        />
      </form>
    );
  }
}

UserNotes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserNotes);

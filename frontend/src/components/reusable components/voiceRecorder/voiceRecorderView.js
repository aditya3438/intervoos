import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import VoiceRecorder from './voiceRecorder'
import QuestionStepper from '../questionStepper'
import TextField from '../textfields/textField'



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
  
function VoiceRecorderView(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={16}>
                    <Grid item xs={12} sm container>
                        <QuestionStepper />
                    </Grid>
                    <Grid item>
                        <VoiceRecorder />
                    </Grid>
                    <Grid item>
                        <TextField />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
  }
  
VoiceRecorderView.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(VoiceRecorderView);
  
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
//import "node_modules/video-react/dist/video-react.css"; // import css
import VoiceRecorder from './voiceRecorder/voiceRecorder'
// import "~video-react/styles/scss/video-react";
// import { Player } from 'video-react';
import ReactPlayer from 'react-player'
import QuestionStepper from './questionStepper'


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

function ComplexGrid(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item xs={12} sm container>
            <QuestionStepper />
          </Grid>
          <Grid item>
            {/* <ButtonBase className={classes.image}> */}
              {/* <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" /> */}
              {/* <Player
                playsInline
                // poster="/assets/poster.png"
                src="https://www.youtube.com/watch?v=Ji46s5BHdr0"
                /> */}
                <ReactPlayer url='https://www.youtube.com/watch?v=Ji46s5BHdr0' />
            {/* </ButtonBase> */}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);

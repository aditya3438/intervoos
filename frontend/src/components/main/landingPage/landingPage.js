import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import UserProfile from '../../profiles/userProfile'
import LoginButton from  '../../authentication/loginButton'


const styles = theme => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    
    mainFeaturedPost: {
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.common.black,
      marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
      padding: `${theme.spacing.unit * 6}px`,
      [theme.breakpoints.up('md')]: {
        paddingRight: 0,
      },
    },
    mainGrid: {
      marginTop: theme.spacing.unit * 3,
    },

    footer: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing.unit * 8,
      padding: `${theme.spacing.unit * 6}px 0`,
    },
  });

  function LandingPage(props) {
    const { classes } = props;

    return (
      <React.Fragment>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={12}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" align="center" variant="h3" color="inherit" gutterBottom>
                    <b>Intervoos</b> is your personal speaking coach
                  </Typography>
                  <Typography variant="h5" align="center" color="inherit" paragraph>
                    Whether its preparing for a job or college interview, practicing for a test like IELTS, giving a speech or, 
                    more importantly, overcoming your fear of public speaking and talking to strangers,  
                    <b>Intervoos</b> is there with you every step of the way to take your communications skills and your confidence to the next level.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <LoginButton />
        </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          <b>Intervoos</b>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Made with SOAL
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);
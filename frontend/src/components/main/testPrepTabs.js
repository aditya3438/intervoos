import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TestPrep from '../main/testprep'
import ComplexGrid from '../reusable components/mediaPlayerView'
import VoiceRecorderView from '../reusable components/voiceRecorder/voiceRecorderView';
import VideoCallView from '../reusable components/videoChats/videoCallView'
import ProgressTabView from '../reusable components/progressTabView'
import AssessView from '../reusable components/assessments/assessView'

const styles = {
  root: {
    flexGrow: 1,
  },
};

class TestPrepTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <Route
            path="/"
            render={({ location }) => (
              <Fragment>
                <Paper>
                  <Tabs value={location.pathname}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                  >
                    <Tab label="Learn" component={Link} to="/testprep/learn" />
                    <Tab label="Practice" component={Link} to="/testprep/practice" />
                    <Tab label="Assessment" component ={Link} to ="/testprep/assess" />
                    <Tab label="Progress" component ={Link} to ="/testprep/progress" />
                  </Tabs>
                </Paper>
                <Switch>
                  {/* <Route path="/interviews" render={() => <div>Practice Answering Q's for interviews</div>} /> */}
                  <Route path="/testprep/learn" component= {ComplexGrid} />
                  <Route path="/testprep/practice" component= {VideoCallView} />
                  <Route path="/testprep/assess" component= {AssessView}  />
                  <Route path="/testprep/progress" component= {ProgressTabView} />
                  {/* <Route exact path="/" render={() => <div>Home</div>} /> */}
                </Switch>
              </Fragment>
            )}
          />
      </div>
    </BrowserRouter>
    );
  }
}

TestPrepTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TestPrepTabs);
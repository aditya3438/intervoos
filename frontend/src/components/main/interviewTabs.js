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
import ProgressTabView from '../reusable components/progressTabView'

const styles = {
  root: {
    flexGrow: 1,
  },
};

class InterviewTabs extends React.Component {
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
                    <Tab label="Learn" component={Link} to="/interviews/learn" />
                    <Tab label="Practice" component={Link} to="/interviews/practice" />
                    <Tab
                      label="Progress"
                      href="#basic-tabs"
                      component={Link}
                      to="/interviews/progress"
                    />
                    <Tab label="Notes" component ={Link} to ="/interviews/notes" />
                  </Tabs>
                </Paper>
                <Switch>
                  {/* <Route path="/interviews" render={() => <div>Practice Answering Q's for interviews</div>} /> */}
                  <Route path="/interviews/learn" component= {ComplexGrid} />
                  <Route path="/interviews/practice" component= {VoiceRecorderView} />
                  <Route path="/interviews/progress" component= {ProgressTabView} />
                  <Route path="/interviews/notes" component= {TestPrep}  />
                  <Route exact path="/" render={() => <div>Home</div>} />
                </Switch>
              </Fragment>
            )}
          />
      </div>
    </BrowserRouter>
    );
  }
}

InterviewTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InterviewTabs);
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
import UserNotesView from '../reusable components/notes/notesView'


const styles = {
  root: {
    flexGrow: 1,
  },
};

class StrangerTabs extends React.Component {
  state = {
    value: 'a',
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
                  <Tabs value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                  >
                    <Tab label="Learn" value="a"component={Link} to="/stranger/learn" />
                    <Tab label="Practice" value="b"component={Link} to="/stranger/practice" />
                    <Tab label="Notes" value="c"component ={Link} to ="/stranger/notes" />
                  </Tabs>
                </Paper>
                <Switch>
                  {/* <Route path="/interviews" render={() => <div>Practice Answering Q's for interviews</div>} /> */}
                  <Route path="/stranger/learn" component= {ComplexGrid} />
                  <Route path="/stranger/practice" component= {VideoCallView} />
                  <Route path="/stranger/notes" component= {UserNotesView}  />
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

StrangerTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StrangerTabs);
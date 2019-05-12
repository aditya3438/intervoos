import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Interviews from "../main/interviews"
import GroupDiscussion from '../main/gd'
import Stranger from '../main/stranger'
import TestPrep from '../main/testprep'

const styles = {
  root: {
    flexGrow: 1,
  },
};

class CenteredTabs extends React.Component {
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
                    <Tab label="Interviews" component={Link} to="/interviews" />
                    <Tab label="GD's" component={Link} to="/gd" />
                    <Tab
                      label="Talk to Strangers"
                      href="#basic-tabs"
                      component={Link}
                      to="/stranger"
                    />
                    <Tab label="Test Prep" component ={Link} to ="/testprep" />
                  </Tabs>
                </Paper>
                <Switch>
                  {/* <Route path="/interviews" render={() => <div>Practice Answering Q's for interviews</div>} /> */}
                  <Route path="/interviews" component= {Interviews} />
                  <Route path="/gd" component= {GroupDiscussion} />
                  <Route path="/stranger" component= {Stranger} />
                  <Route path="/testprep" component= {TestPrep}  />
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

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);
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
import LoginForm from '../authentication/loginForm'
import LandingPage from '../main/landingPage/landingPage';
import PageHeader from './header'

const styles = {
  root: {
    flexGrow: 1,
  },

  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }
};

class CenteredTabs extends React.Component {
  state = {
    value: 'a',
  };

  handleChange = (event, value) => {
    console.log("%%%%%%%%%%%%", value)
    this.setState({
      value: value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
        <PageHeader />
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
                    <Tab label="Interviews" value ="a" component={Link} to="/interviews" />
                    <Tab label="GD's" value ="b" component={Link} to="/gd" />
                    
                    <Tab
                      label="Talk to Strangers"
                      value ="c"
                      href="#basic-tabs"
                      component={Link}
                      to="/stranger"
                    />
                    <Tab label="Test Prep" value ="d" component ={Link} to ="/testprep" />
                  </Tabs>
                </Paper>
                <Switch>
                  {/* <Route path="/interviews" render={() => <div>Practice Answering Q's for interviews</div>} /> */}
                  <Route path="/interviews" component= {Interviews} />
                  <Route path="/gd" component= {GroupDiscussion} />
                  <Route path="/stranger" component= {Stranger} />
                  <Route path="/testprep" component= {TestPrep}  />
                  {/* <Route exact path="/" render={() => <div>Home</div>} /> */}
                  <Route exact path="/" component= {LandingPage} />
                  <Route path='/login' component={LoginForm} />
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
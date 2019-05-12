import React, { Component } from 'react';
//import Button from '@material-ui/core/Button';
import PageHeader from './layout/header'
import CenteredTabs from './layout/tabs'
import LoginForm from './authentication/loginForm'

class HomePage extends Component {

    render(){
        return (

            <div>
              {/* <Button variant="contained" color="primary">Hello</Button> */}
              <PageHeader />
              <CenteredTabs />
              <LoginForm />
            </div>
          );
    }
}

export default HomePage;
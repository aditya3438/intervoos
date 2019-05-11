import React, { Component } from 'react';
//import Button from '@material-ui/core/Button';
import PageHeader from './layout/header'
import CenteredTabs from './layout/tabs'

class HomePage extends Component {

    render(){
        return (
            <div>
              {/* <Button variant="contained" color="primary">Hello</Button> */}
              <PageHeader />
              <CenteredTabs />
            </div>
          );
    }
}

export default HomePage;
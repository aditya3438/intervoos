import React, { Component } from 'react';
//import Button from '@material-ui/core/Button';
import PageHeader from './layout/header'
import CenteredTabs from './layout/tabs'
import axios from 'axios';

class HomePage extends Component {

  componentDidMount() {
    axios.get('http://localhost:5000/profile/test')
    .then(res => {
      console.log(res);
    })
  }

    render(){
        return (

            <div>
              {/* <Button variant="contained" color="primary">Hello</Button> */}
              <CenteredTabs />
            </div>
          );
    }
}

export default HomePage;
import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import LoginForm from './loginForm'

class LoginButton extends Component{

    render(){
        return(
                <div>
                    <Button 
                        style={{
                                borderRadius: 6,
                                backgroundColor: "#21b6ae",
                                padding: "10px 24px",
                                fontSize: "18px"
                            }}
                        variant="contained"
                        component={Link} to="/login"
                        onClick={this.props.handleLogin}
                    >
                        Login
                    </Button>
                </div>
        );
    }
}

export default LoginButton;
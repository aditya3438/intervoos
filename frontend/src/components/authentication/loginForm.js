import React from "react";
import {
  FormControl,
  InputLabel,
  Input
} from "@material-ui/core";
import LoginButton from  '../authentication/loginButton';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class LoginForm extends React.Component {
  state = {
    IsLoggedIn: false,
  };
  handleLogin = () => {
    console.log("Clicked")
    axios.post('http://localhost:5000/user/login', {"email": this.state.email, "password": this.state.password})
    .then((res)=>{
      localStorage.setItem('authToken', res.data.token)
      this.setState({
        IsLoggedIn: true,
        user: res.data.user,
      })
    })
  }
  handleChange = (e) => {
    console.log(e.target.value);
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    })
  }
  render() {
    if(this.state.IsLoggedIn === true) {
     return  <Redirect 
        to='/interviews'
      />
    }
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form style={{ width: "50%" }}>
          <h1>Login Form</h1>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input name='name' id="name" type="text" onChange={this.handleChange} />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input name="email" id="email" type="email" onChange={this.handleChange}/>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" id="password" type="password"  onChange={this.handleChange}/>
          </FormControl>

          {/* <Button variant="contained" color="primary" size="medium">
            Login
          </Button> */}
          <LoginButton handleLogin={this.handleLogin}/>
        </form>
      </div>
    );
  }
}

export default LoginForm;
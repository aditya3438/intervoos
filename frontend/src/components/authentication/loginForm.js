import React from "react";
import {
  FormControl,
  InputLabel,
  Input
} from "@material-ui/core";
import LoginButton from  '../authentication/loginButton'

class LoginForm extends React.Component {
  render() {
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
            <Input id="name" type="text" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" type="password"  />
          </FormControl>

          {/* <Button variant="contained" color="primary" size="medium">
            Login
          </Button> */}
          <LoginButton />
        </form>
      </div>
    );
  }
}

export default LoginForm;
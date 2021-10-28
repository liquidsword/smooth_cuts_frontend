// import React from 'react'
// import { connect } from 'react-redux'
// import { updateLoginForm } from "../actions/loginForm_action.js"
// import { login } from "../actions/currentUser.js"

// const Login = ({ loginFormData, updateLoginForm, login, history }) => {

//   const handleInputChange = event => {
//     const { name, value } = event.target
//     const updatedFormInfo = {
//       ...loginFormData,
//       [name]: value
//     }
//     updateLoginForm(updatedFormInfo)
//   }

//   const handleSubmit = event => {
//     event.preventDefault()
//     login(loginFormData, history)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} />
//       <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} />
//       <input value="Login" type="submit"/>
//     </form>
  
//   )

// }

// const mapStateToProps = state => {
//   return {
//     loginFormData: state.loginForm
//   }
// }

// export default connect(mapStateToProps, { updateLoginForm, login })(Login)



import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h2" variant="h7">
          Connect with Smooth Cuts
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Continue
          </Button>

          <br/>
            <center>Or</center>
        
          <Button
                type="submit"
                fullWidth
                variant="contained"
                color="white"
                className={classes.submit}
                label="Continue with Google"
                primary={true}    
              >    
              <div>
                <img src='Google.jpg' placeholder='google signin' />
              </div>
              
            </Button> 
            
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Create One"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}


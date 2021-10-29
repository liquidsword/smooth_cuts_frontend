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




import { ThemeProvider, makeStyles } from '@mui/styles';
import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Smooth Cuts
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


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
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}


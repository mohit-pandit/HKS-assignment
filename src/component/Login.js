import React, { useState } from 'react'
import Facebook from './assets/facebook.png'
import Google from './assets/google.png'
import HKS from './assets/hks.svg'
import Form from 'react-bootstrap/Form';
import './css/Main.css'
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Login = () => {
  const [usercredential, setcredential] = useState({})
  const [open, setOpen] = useState(false);
  const [dialogmsg, setdialog] = useState('Incorrect Credentials');

  const navigate = useNavigate();


  //////// Form on submit handler/////////
  const SubmitData = (e) => {
    e.preventDefault();
    const res = emailValidation()
    if (res == true) {
      if ((usercredential.email == 'admin@gmail.com') && (usercredential.password == 'admin')) {
        localStorage.setItem('usercredentials', usercredential)
        navigate('/Dashboard');
      }
      else{
        setdialog('Incorrect Credentials')
        setOpen(true);
      }
    }
    else {
        setdialog('Incorrect Email address')
        setOpen(true);     
    }
  }

  const eventHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setcredential(data => ({ ...data, [name]: value }))
  }

  ////// Dialog modal code ////////
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  //// Email validation using Regex////
  const emailValidation = () => {
    // let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;

    let Email = usercredential.email;
    if (usercredential.email != '') {
      let result = regex.test(Email)
      if (result == false) {
        return false;
      }
      else {
        return true;
      }
    }
  }

  return (
    <div className='parentContainer'>

      <Stack spacing={2} sx={{ width: '100%' }}>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {dialogmsg}
          </Alert>
        </Snackbar>

      </Stack>


      <div className='d-flex justify-content-center align-items-center' style={{ 'height': '100vh' }}>
        <div className='Main-container d-flex'>
          <div className='FirstContainer d-flex justify-content-center align-items-center'>
            <div className='Firstinner'>
              <p>WELCOME TO</p>
              <div className='FirstContainerImg'>
                <img src={HKS} alt='Login with Facebook' />
              </div>
              <p>Global Business Service Outsourcing for</p>
              <p><b>Tech and Marketing</b></p>
            </div>
          </div>

          <div className='Second-container'>
            <h3 className='mt-5'>Login to HKS Dashboard</h3>

            <div className='LoginOption d-flex justify-content-center'>
              <div className='d-flex'><img src={Facebook} alt='Login with Facebook' /><a href='#'>Login with Facebook</a></div>
              <div className='d-flex'><img src={Google} alt='Login with Google' /><a href='#'>Login with Google</a></div>
            </div>

            <p className='align-center'>OR</p>

            <Form onSubmit={SubmitData}>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="YourEmail@gmail.com" name='email' onChange={e => { eventHandler(e) }} required />
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Control type="password" placeholder="Password" name='password' onChange={eventHandler} required />
                <a href='#'>Forgot Password</a>
              </Form.Group>

              <Form.Group className='newUser d-flex'>
                <input type='submit' value="Login" className='me-4' />
                <p>If you are a new user. <a href='#' className='m-0 ms-2'>Signup here</a></p>
              </Form.Group>
            </Form>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Login

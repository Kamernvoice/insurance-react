import React, {useContext, useState} from 'react';

import {AuthContext, DrawerContext} from "../context";
import {Avatar, Button, Grid, Paper, TextField, Typography} from "@material-ui/core";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import {Link} from "@mui/material";
import {useHistory} from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MyAppBar from "../components/MyAppBar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {registration} from "../http/userAPI";

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Signup = () => {
    const router = useHistory();
    const [drawerState, setDrawerState] = React.useState(false);

    const paperStyle = {padding: '30px 20px', width: 400, margin: "20px auto"}
    const avatarStyle = {backgroundColor: '#1bbd7e'}
    const marginTop = {marginTop: 10}

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [role, setRole] = useState('CLIENT')
    const [phone, setPhone] = useState('')
    const signUp = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("Passwords not equals")
        } else {
            try {
                const response = await registration(name, email, password, role, phone)
                setIsAuth(true);
                localStorage.setItem('auth', 'true')
                console.log(response)
                router.push('/profile')
            } catch (e) {
                alert("Not registered")
            }
        }
    }

    return (
        <div style={{backgroundImage: 'url(https://source.unsplash.com/random)'}}>
            <DrawerContext.Provider value={{
                drawerState,
                setDrawerState
            }}>
                <MyAppBar/>
            </DrawerContext.Provider>
            <Grid container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{ minHeight: '100vh'}} >
                <Paper elevation={20} style={paperStyle}>
                    <Button onClick={() => router.goBack()} style={{float: "left"}}><ArrowBackIcon/></Button>
                    <Button onClick={() => router.push('/')} style={{float: "right"}}><CloseIcon/></Button>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineIcon/>
                        </Avatar>
                        <Typography variant="h5" component="h2" style={marginTop}>Sign Up</Typography>
                        <Typography variant='caption'>Please fill this form to create an account</Typography>

                    </Grid>
                    <form>
                        {(role === "CLIENT" || role === "ADMIN")
                        && <TextField fullWidth label="Name" placeholder="Enter your name"
                                      value={name}
                                      onChange={e => setName(e.target.value)}
                        />}
                        {role === "INSURER" &&
                        <TextField fullWidth label="Company Name" placeholder="Enter your name"
                                   value={name}
                                   onChange={e => setName(e.target.value)}
                        />}
                        <TextField
                            fullWidth label="Email"
                            placeholder="Enter your email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Role</FormLabel>
                            <RadioGroup
                                aria-label="role"
                                defaultValue="client"
                                name="radio-buttons-group"
                                style={{display: 'initial'}}
                                value={role}
                                onChange={e => setRole(e.target.value)}
                            >
                                <FormControlLabel value="CLIENT" control={<Radio />} label="Client" />
                                <FormControlLabel value="INSURER" control={<Radio />} label="Insurer" />
                                <FormControlLabel value="ADMIN" control={<Radio />} label="Admin"/>
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            fullWidth label="Password"
                            placeholder="Enter your password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <TextField fullWidth label="Confirm Password"
                                   placeholder="Confirm your password"
                                   type="password"
                                   value={confirmPassword}
                                   onChange={e => setConfirmPassword(e.target.value)}
                        />
                        <TextField fullWidth label="Phone" placeholder="Enter your phone"
                                   value={phone}
                                   onChange={e => setPhone(e.target.value)}
                        />
                        <FormGroup>
                            <Typography style={{marginTop: 10}}>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label={"I accept the terms and conditions"}
                                />
                                <Link href="#">Read</Link>
                            </Typography>
                        </FormGroup>
                        <Button style={{marginTop: 5}} type='submit' variant='contained' onClick={signUp} color='primary'>
                            Sign Up
                        </Button>
                        <Typography style={{marginTop: 10}}> Do you have an account?
                            <Link onClick={() => router.push('/login')} style={{marginLeft: 10}}>
                                Log In
                            </Link>
                        </Typography>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default Signup;
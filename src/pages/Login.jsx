import React, {useContext, useState} from 'react';

import {AuthContext, DrawerContext} from "../context";
import {Avatar, Button, Grid, Paper, TextField, Typography} from "@material-ui/core";

import FormControlLabel from '@mui/material/FormControlLabel';
import LockIcon from '@mui/icons-material/Lock';

import Checkbox from '@mui/material/Checkbox';
import {Link} from "@mui/material";
import {useHistory} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import MyAppBar from "../components/MyAppBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {login} from "../http/userAPI";

const Login = () => {
    const router = useHistory();
    const [drawerState, setDrawerState] = React.useState(false);

    const paperStyle={padding: 20, width: 350, margin: "20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnStyle={margin:'8px 0'}

    const {isAuth, setIsAuth} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = async (event) => {
        event.preventDefault();
        const response = await login(email, password)
        console.log(response)
        console.log(localStorage.getItem('token'))
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
        router.push("/profile")
    }

    return (
        <div style={{backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundOverlay: "rgba(0,0,0,.5)",
            width:"100%",
            height:"100vh"}}>
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
                <Paper elevation={10} style={paperStyle}>
                    <Button onClick={() => router.goBack()} style={{float: "left"}}><ArrowBackIcon/></Button>
                    <Button onClick={() => router.push('/')} style={{float: "right"}}><CloseIcon/></Button>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockIcon/></Avatar>
                        <Typography variant="h5" component="h2" style={{marginTop: 10}}>Sign In</Typography>
                    </Grid>
                    <form>
                        <TextField
                            label='Username' name="username"
                            placeholder='Enter username' type='email'
                            fullWidth required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField label='Password' name="password"
                                   placeholder='Enter password' type='password'
                                   fullWidth required
                                   value={password}
                                   onChange={e => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checked"
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                        <Button type='submit' color='primary' variant="contained" style={btnStyle} onClick={signIn} fullWidth>Sign in</Button>
                    </form>
                    <Typography style={{marginTop: 10}}>
                        <Link href="#" >
                            Forgot password ?
                        </Link>
                    </Typography>
                    <Typography style={{marginTop: 10}}> Don't has an account?
                        <Link onClick={() => router.push('/signup')} style={{marginLeft: 10}}>
                            Sign In
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    );
};

export default Login;
import React from 'react';
import {
    AppBar,
    Button,
    Container,
    Toolbar,
    Typography
} from "@material-ui/core";
import {useStyles} from "../hooks/useStyle";
import MyDrawer from "./MyDrawer";
import MyAccountMenu from "./MyAccountMenu";
import {useHistory} from "react-router-dom";

const MyAppBar = () => {
    const router = useHistory();
    const classes = useStyles();

    return (
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <MyDrawer/>
                    <Typography variantMapping='h6' className={classes.title}>Web Developer Blog</Typography>
                    <Button color="inherit" variant="outlined" onClick={() => router.push(`/login`)}>Log In</Button>
                    <Button color="secondary" variant="contained" onClick={() => router.push(`/signup`)} style={{marginLeft: 20}}>Sign Up</Button>
                    <MyAccountMenu/>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MyAppBar;
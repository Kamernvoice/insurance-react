import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    IconButton, TextField,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import {useStyles} from "../hooks/useStyle";
import MyDrawer from "./MyDrawer";
import MyAccountMenu from "./MyAccountMenu";

const MyAppBar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <MyDrawer/>
                    <Typography variantMapping='h6' className={classes.title}>Web Developer Blog</Typography>
                    <Box mr={3}>
                        <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log In</Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Log In</DialogTitle>
                            <DialogContent>
                                <DialogContentText>Log In to see videos</DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">Cancel</Button>
                                <Button onClick={handleClose} color="primary">Log In</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                    <Button color="secondary" variant="contained">Sign Up</Button>
                    <MyAccountMenu/>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MyAppBar;
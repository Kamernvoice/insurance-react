import React from 'react';
import {Button, Container, Grid, Typography} from "@material-ui/core";
import {useStyles} from "../hooks/useStyle";

const MyFilling = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContent}>
            <Container maxWidth="md">
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    Web Developer Blog
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <div className={classes.mainButtons}>
                    <Grid container spacing={5} justifyContent="center">
                        <Grid item>
                            <Button variant="contained" color="primary">Start Now</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">Learn More</Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default MyFilling;
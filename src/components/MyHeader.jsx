import React from 'react';
import {Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import {useStyles} from "../hooks/useStyle";

const MyHeader = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.mainFeaturesPost}
               style={{backgroundImage: 'url(https://source.unsplash.com/random)'}}>
            <Container fixed>
                <div className={classes.overlay}/>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                            <Typography
                                component="h1"
                                variant="h3"
                                style={{color:"#DCDCDC"}}
                                gutterBottom
                            >
                                Web Developer Blog
                            </Typography>
                            <Typography
                                variant="h5"
                                style={{color:"#DCDCDC"}}
                                paragraph
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                            </Typography>
                            <Button variant="contained" color="secondary">
                                Learn More
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default MyHeader;
import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import {makeStyles} from "@material-ui/core/styles";
import {useStyles} from "../hooks/useStyle";

const MyTile = (data) => {
    const classes = useStyles();
    const entity = data.data;
    return (
        <Grid item key={entity.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {entity.insuranceTypeName}
                    </Typography>
                    <Typography>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                    <Button size="small" color="primary">
                        Edit
                    </Button>
                    <LayerIcon/>
                    <PlayCircleFilledIcon/>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default MyTile;
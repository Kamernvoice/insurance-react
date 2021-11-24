import React from 'react';
import {BottomNavigation, BottomNavigationAction, Typography} from "@material-ui/core";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FolderIcon from "@mui/icons-material/Folder";
import {useStyles} from "../hooks/useStyle";

const MyFooter = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState("recent")
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                className={classes.root}
            >
                <BottomNavigationAction
                    label="Recent"
                    value="recent"
                    icon={<RestoreIcon/>}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon/>}
                />
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon/>}
                />
                <BottomNavigationAction
                    label="Folder"
                    value="folder"
                    icon={<FolderIcon/>}
                />
            </BottomNavigation>
            <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
                Web Developer Blog React js Material UI site
            </Typography>
        </div>
    );
};

export default MyFooter;
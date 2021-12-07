import {useStyles} from "../hooks/useStyle";
import * as React from "react";
import {DrawerContext} from "../context";
import MyAppBar from "../components/MyAppBar";
import MyHeader from "../components/MyHeader";
import MyFilling from "../components/MyFilling";
import {Container, Grid} from "@material-ui/core";
import MyTile from "../components/MyTile";
import MyFooter from "../components/MyFooter";
import {useOffers} from "../hooks/useBackend";

function Main() {
    const offers = useOffers();
    const classes = useStyles();

    const [drawerState, setDrawerState] = React.useState(false);

    return (
        <div className="App">
            <DrawerContext.Provider value={{
                drawerState,
                setDrawerState
            }}>
                <MyAppBar/>
            </DrawerContext.Provider>
            <main>
                <MyHeader/>
                <MyFilling/>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {offers.map((offer) => (
                            <MyTile data={offer}/>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer>
                <MyFooter/>
            </footer>
        </div>
    );
}

export default Main;

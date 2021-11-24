import {useStyles} from "../hooks/useStyle";
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {DrawerContext} from "../context";
import MyAppBar from "../components/MyAppBar";
import MyHeader from "../components/MyHeader";
import MyFilling from "../components/MyFilling";
import {Container, Grid} from "@material-ui/core";
import MyTile from "../components/MyTile";
import MyFooter from "../components/MyFooter";

function Main() {

    const classes = useStyles();

    const [drawerState, setDrawerState] = React.useState(false);

    const [data, setData] = useState({_embedded: {offers: []}});

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:8082/offers/');
            setData(result.data);
        };
        fetchData();
    }, []);

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
                        {data._embedded.offers.map((offer) => (
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

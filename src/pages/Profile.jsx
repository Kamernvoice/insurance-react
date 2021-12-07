import React, {useContext, useEffect, useState} from 'react';
import {Button} from "@mui/material";
import {useHistory} from "react-router-dom";
import {offers, profile, insuranceType} from "../http/userAPI";
import MyAppBar from "../components/MyAppBar";
import {DrawerContext} from "../context";

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MyTile from "../components/MyTile";
import {TextareaAutosize} from "@mui/core";

const Profile = () => {
    const router = useHistory();
    const [drawerState, setDrawerState] = React.useState(false);

    const [user, setUser] = useState('')

    const getProfile = async (event) => {
        event.preventDefault();
        const response = await profile()
        setUser(response)
        console.log(response)
    }

    const createOffer = async (event) => {
        event.preventDefault();
        await offers(ownInsuranceType, user.id, term, cost, description)
        handleClose()
    }

    const [cost, setCost] = useState('')
    const [term, setTerm] = useState('')
    const [description, setDescription] = useState('')
    const [open, setOpen] = React.useState(false);
    const [allInsuranceType, setAllInsuranceType] = useState([])
    const [ownInsuranceType, setOwnInsuranceType] = useState('')

    const handleClickOpen = async () => {
        setAllInsuranceType(await insuranceType())
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setOwnInsuranceType(event.target.value);
    };
    return (
        <div>
            <div>
                <DrawerContext.Provider value={{
                    drawerState,
                    setDrawerState
                }}>
                    <MyAppBar/>
                </DrawerContext.Provider>
            </div>
            <div style={{marginTop: 90}}>
                <Button onClick={() => router.goBack()}>Back</Button>
                <Button onClick={getProfile}>Get Profile</Button>
                <p>{user.login}</p>
            </div>
            <div>
                {user.role === 'ROLE_INSURER' && <Button variant="outlined" onClick={handleClickOpen}>
                    Create Offer
                </Button>}
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Send</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please type offer parameters when you need.
                        </DialogContentText>

                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Insurance Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={ownInsuranceType}
                                    label="Insurance Type"
                                    onChange={handleChange}
                                >
                                    {allInsuranceType.map((type) => (
                                        <MenuItem value={type.id}>{type.insuranceType}</MenuItem>
                                    ))}
                                </Select>
                                <TextField value={term} onChange={e => setTerm(e.target.value)}
                                           autoFocus margin="dense" id="term" label="Term" type="number"
                                           fullWidth variant="standard"/>
                                <TextField value={cost} onChange={e => setCost(e.target.value)}
                                           autoFocus margin="dense" id="cost" label="Cost" type="number"
                                           fullWidth variant="standard"/>
                                <TextField value={description} onChange={e => setDescription(e.target.value)}
                                           autoFocus margin="dense" id="description" label="Description" type="text"
                                           fullWidth variant="standard"/>
                            </FormControl>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={createOffer}>Send</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};

export default Profile;
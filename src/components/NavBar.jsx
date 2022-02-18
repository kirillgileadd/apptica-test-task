import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {CustomButton} from "./Button";
import CountryMenu from "./CountryMenu";

const NavBar = ({onChangeCountry}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Top History
                    </Typography>
                    <CountryMenu onChangeCountry={onChangeCountry}/>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
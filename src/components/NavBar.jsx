import React from 'react';
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import CountryMenu from "./CountryMenu";
import {CustomButton} from "./Button";

const NavBar = ({onChangeCountry, exportPngImage}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Top History
                    </Typography>
                    <CustomButton onClick={exportPngImage} sx={{mr: 1}}>Png</CustomButton>
                    <CountryMenu onChangeCountry={onChangeCountry}/>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
import React from 'react';
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import CountryMenu from "./CountryMenu";
import {CustomButton} from "./Button";

const NavBar = ({onChangeCountry, exportPngImage, exportCSV, data, currentCountry}) => {
    return (
        <Box sx={{flexGrow: 1, width: '100%'}}>
            <AppBar position="relative">
                <Toolbar sx={{justifyContent: {xs: 'center'}}}>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
                        Top History
                    </Typography>
                    <CustomButton onClick={exportCSV(data)} sx={{mr: 1}}>Csv</CustomButton>
                    <CustomButton onClick={exportPngImage} sx={{mr: 1}}>Png</CustomButton>
                    <CountryMenu
                        onChangeCountry={onChangeCountry}
                        currentCountry={currentCountry}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
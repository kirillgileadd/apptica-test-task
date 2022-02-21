import React from 'react';
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import CountryMenu from "./CountryMenu";
import {CustomButton} from "./Button";
import {DateRangePickerComponent} from "@syncfusion/ej2-react-calendars";

const NavBar = ({onChangeCountry, exportPngImage, data, currentCountry, countries}) => {
    return (
        <Box sx={{flexGrow: 1, width: '100%'}}>
            <AppBar position="relative">
                <Toolbar sx={{justifyContent: {xs: 'center'}}}>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
                        Top History
                    </Typography>
                    <CustomButton sx={{mr: 1}}>Csv</CustomButton>
                    <CustomButton onClick={exportPngImage} sx={{mr: 1}}>Png</CustomButton>
                    <CountryMenu
                        countries={countries}
                        onChangeCountry={onChangeCountry}
                        currentCountry={currentCountry}
                    />
                    <CustomButton sx={{display: {xs: 'none', sm: 'block'}}}>
                        <DateRangePickerComponent
                            placeholder="Enter Date Range"
                            minDays={3}
                            maxDays={5}
                            format="dd-MM-yy"
                        />
                    </CustomButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
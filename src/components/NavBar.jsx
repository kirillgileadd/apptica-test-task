import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {CustomButton} from "./Button";

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Top History
                    </Typography>
                    <CustomButton variant={'contained'}>Button</CustomButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
import React from 'react';
import {Box, Typography} from "@mui/material";

const NoData = () => {
    return (
        <Box display={'flex'} justifyContent={'center'}>
            <Typography>
                No data on the application's ranking in this country within this time period
            </Typography>
        </Box>
    );
};

export default NoData;
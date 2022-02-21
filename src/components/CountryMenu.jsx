import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {CustomButton} from "./Button";
import {Box, Typography} from "@mui/material";

export default function SimpleListMenu({onChangeCountry, currentCountry, countries}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const currentCountryItem = countries.find(item => item.id === currentCountry )
    const open = Boolean(anchorEl);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (id) => {
        onChangeCountry(id)
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <CustomButton
                sx={{mr: 1}}
                onClick={handleClickListItem}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                >
                    <img style={{width: "20px"}} src={currentCountryItem.icon} alt=""/>
                    <Typography sx={{ml: 1, fontWeight: 'bold'}}>
                        {currentCountryItem.name}
                    </Typography>
                </Box>
            </CustomButton>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                }}
            >
                {countries.map((option) => (
                    <MenuItem
                        key={option.id}
                        selected={option.id === currentCountry}
                        onClick={() => handleMenuItemClick(option.id)}
                    >
                        <img style={{width: "20px"}} src={option.icon} alt=""/>
                        <Typography sx={{ml: 1}}>
                            {option.country}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
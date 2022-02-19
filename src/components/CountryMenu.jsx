import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {CustomButton} from "./Button";
import russiaSvg from '../assets/img/russia.svg'
import usaSvg from '../assets/img/united_states.svg'
import ukSvg from '../assets/img/united_kingdon.svg'
import {Box, Typography} from "@mui/material";

const options = [
    {id: 1, body: 'USA', img: usaSvg, shortTitle: 'USA'},
    {id: 2, body: 'Russian Federation', img: russiaSvg, shortTitle: 'RU'},
    {id: 3, body: 'United Kingdom', img: ukSvg, shortTitle: 'UK'},
];

export default function SimpleListMenu({onChangeCountry, currentCountry}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    let selectedIndex = currentCountry - 1
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
                    <img src={options[selectedIndex].img} alt=""/>
                    <Typography sx={{ml: 1, fontWeight: 'bold'}}>
                        {options[selectedIndex].shortTitle}
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
                {options.map((option) => (
                    <MenuItem
                        key={option.body}
                        selected={option.id === currentCountry}
                        onClick={() => handleMenuItemClick(option.id)}
                    >
                        <img src={option.img} alt=""/>
                        <Typography sx={{ml: 1}}>
                            {option.body}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
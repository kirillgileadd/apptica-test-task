import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {CustomButton} from "./Button";
import russiaSvg from '../assets/img/russia.svg'
import usaSvg from '../assets/img/united_states.svg'
import ukSvg from '../assets/img/united_kingdon.svg'
import {Box} from "@mui/material";

const options = [
    {id: 1, body: 'USA', img: usaSvg},
    {id: 2, body: 'Russian Federation', img: russiaSvg},
    {id: 3, body: 'United Kingdon', img: ukSvg},
];

export default function SimpleListMenu({onChangeCountry}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        let id = index + 1
        onChangeCountry(id)
        setSelectedIndex(index);
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
                    {options[selectedIndex].body}
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
                {options.map((option, index) => (
                    <MenuItem
                        key={option.body}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        <img src={option.img} alt=""/>
                        {option.body}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
import React, {useState} from 'react';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import {Box, Typography} from "@mui/material";

const LegendItem = ({id, label, onToggleСhart, borderColor}) => {
    const [check, setCheck] = useState(true)

    const handleToggle = () => {
        setCheck(!check)
        onToggleСhart({check, id})
    }
    const labelId = `checkbox-list-label-${id}`;

    return (
        <ListItem
            sx={{width: {sx: "100%", sm: "250px"}}}
            disablePadding
        >
            <ListItemButton onClick={handleToggle} dense>
                    <Checkbox
                        edge="start"
                        checked={check}
                        disableRipple
                    />
                <ListItemText id={labelId} primary={
                    <Typography noWrap sx={{width: '150px'}}>
                        {label}
                    </Typography>
                } />
                <Box  sx={{width: "20px", height: '20px', backgroundColor: borderColor, borderRadius: "5px"}}/>
            </ListItemButton>
        </ListItem>
    );
};

export default LegendItem;
import * as React from 'react';
import List from '@mui/material/List';
import LegendItem from "./LegendItem";

const LegendList = ({legendList, onToggleСhart}) => {
    return (
        <List sx={{display: "flex", flexWrap: 'wrap'}}>
            {legendList.map((value) => {
                return (
                    <LegendItem key={value.id} {...value} onToggleСhart={onToggleСhart}/>
                );
            })}
        </List>
    );
};

export default LegendList;
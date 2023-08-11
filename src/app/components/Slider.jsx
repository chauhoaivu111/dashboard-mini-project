import React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useTheme } from '@mui/material/styles';
import ListItem from './ListItem';


const drawerWidth = 240;
const Slider = ({ open, handleDrawerClose }) => {
    const theme = useTheme();

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <div style={{ height: "63px" }}>
                <IconButton onClick={handleDrawerClose} sx={{ marginLeft: "198px", marginTop: "15px" }}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : ""}
                </IconButton>
            </div>
            <Divider />
            <ListItem />
         
            
        </Drawer>
    );
};

export default Slider;

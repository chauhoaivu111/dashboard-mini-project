import React from "react";
import Link from "next/link";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider } from "@mui/material";

const SlideItem = () => {
  return (
    <div style={{height:"90%",boxSizing:"border-box"}}>
      <List sx={{height:"160px"}}>
        <Link href={"/"} style={{color:"inherit",textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href={"/subtheme"} style={{color:"inherit",textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                < DarkModeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Theme" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href={"/quiz"} style={{color:"inherit",textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <QuizOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="quiz" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />   

      <List sx={{height:"78%",overflow: "auto"  }} >
        <Link href={"/login"} style={{color:"inherit"}}>
          <ListItem disablePadding  sx={{marginTop:"60vh"}}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="logout" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>


    </div>
  );
};

export default SlideItem;

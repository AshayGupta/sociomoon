import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeOutlinedIcon, InfoOutlinedIcon, LogoutIcon, MailOutlineIcon } from "../../../assets/muiIcons";

export const AppSideDrawer = ({drawerWidth}) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const drawerOptions = [
    { text: "Home", icon: <HomeOutlinedIcon />, navigate: "/"},
    { text: "About Us", icon: <InfoOutlinedIcon />, navigate: "/" },
    { text: "Contact Us", icon: <MailOutlineIcon />, navigate: "/" },
    { text: "Logout", icon: <LogoutIcon />, navigate: "/login" },
  ];

  const drawer = (
    <Box sx={{ width: drawerWidth, bgcolor: "primary.main", height: "100vh", color: "white" }}>
      <Toolbar>
        <Typography variant="h6" noWrap>Dashboard</Typography>
      </Toolbar>
      <List>
        {drawerOptions.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(item.navigate)}>
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box", overflow: "hidden" },
      }}
    >
      {drawer}
    </Drawer>
  );
}
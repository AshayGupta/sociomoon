import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AppSideDrawer = ({drawerWidth}) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const drawerOptions = [
    { text: "Home", icon: <HomeIcon />, navigate: "/"},
    { text: "Dashboard", icon: <DashboardIcon />, navigate: "/" },
    { text: "Settings", icon: <SettingsIcon />, navigate: "/" },
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
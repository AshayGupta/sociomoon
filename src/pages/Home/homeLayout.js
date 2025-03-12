import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AppSideDrawer } from "../../common/components/drawer/appSideDrawer";
import { AppHeader } from "../../common/components/header/appHeader";

const HomeLayout = () => {  
  const drawerWidth = 200;

  return (
    <Box sx={{ display: "flex" }}>
      <AppHeader />
      <AppSideDrawer drawerWidth={drawerWidth} />      

      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px`, mt: 8 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default HomeLayout;

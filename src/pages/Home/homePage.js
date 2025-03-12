import React from "react";
import { Card, CardContent, Typography, IconButton, Box, Stack } from "@mui/material";
import { Home, Search, Settings, Person, ShoppingCart, Favorite } from "@mui/icons-material";

const icons = [
  { icon: <Home fontSize="large" />, label: "Home" },
  { icon: <Search fontSize="large" />, label: "Search" },
  { icon: <Settings fontSize="large" />, label: "Settings" },
  { icon: <Person fontSize="large" />, label: "Profile" },
  { icon: <ShoppingCart fontSize="large" />, label: "Cart" },
  { icon: <Favorite fontSize="large" />, label: "Like" },
];

const HomePage = () => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3} padding={3}>
      {[...Array(6)].map((_, index) => (
        <Card 
          key={index} 
          sx={{ width: 300, padding: 2, borderRadius: 3, position: "relative", textAlign: "center" }}
        >
          {/* Card Header at Top Left */}
          <Typography 
            variant="h6" 
            sx={{ position: "absolute", top: 8, left: 16, fontWeight: "bold" }}
          >
            Card {index + 1}
          </Typography>

          <CardContent sx={{ paddingTop: 5 }}>  
            {/* Icon Buttons with Labels */}
            <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={2}>
              {icons.map((item, i) => (
                <Box key={i} display="flex" flexDirection="column" alignItems="center">
                  <IconButton color="primary" aria-label={item.label}>
                    {item.icon}
                  </IconButton>
                  <Typography variant="caption">{item.label}</Typography>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default HomePage;

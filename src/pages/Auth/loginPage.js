import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  IconButton,
  InputAdornment,
  Card,
  CardContent,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ background: "linear-gradient(to bottom, #E3DFF3, #FFFFFF)" }}
    >
      <Card sx={{ width: 400, padding: 3, borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          {/* Logo */}
          <Box textAlign="center" mb={2}>
            <Typography variant="h4" fontWeight="bold" color="green">
              sociomoon
            </Typography>
          </Box>

          <Typography variant="h5" sx={{marginBottom: '20px !important', justifySelf: 'center'}}>Login</Typography>

          <Box sx={{marginBottom: "20px"}}>
            <Typography>Mobile No</Typography>
            <TextField
              fullWidth
              variant="outlined"
              defaultValue="8587961435"
            />
          </Box>

          <Box sx={{marginBottom: "20px"}}>
            <Typography>Your Password</Typography>
            <TextField
              fullWidth
              variant="outlined"
              type={showPassword ? "text" : "password"}
              defaultValue="password"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <Visibility color="error" /> : <VisibilityOff color="error" />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>

          <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
            <FormControlLabel control={<Checkbox />} label="Remember" />
            <Link href="#" underline="none">Lost password?</Link>
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#0a50d8", color: "#fff", fontSize: "16px" }}
            onClick={() => navigate("/")}
          >
            LOGIN
          </Button>

          <Typography textAlign="center" mt={2}>
            Not registered? <Link href="/signup">SignUp</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;

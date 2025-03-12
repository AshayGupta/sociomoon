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

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

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

          {/* Login Heading */}
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Login
          </Typography>

          {/* Mobile Number Field */}
          <Typography fontWeight="bold">Mobile No</Typography>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            defaultValue="8587961435"
          />

          {/* Password Field */}
          <Typography fontWeight="bold">Your Password</Typography>
          <TextField
            fullWidth
            margin="normal"
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

          {/* Remember Me & Forgot Password */}
          <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
            <FormControlLabel control={<Checkbox />} label="Remember" />
            <Link href="#" underline="none">Lost password?</Link>
          </Box>

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#0a50d8", color: "#fff", fontSize: "16px" }}
          >
            LOGIN
          </Button>

          {/* Signup Link */}
          <Typography textAlign="center" mt={2}>
            Not registered? <Link href="#">SignUp</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;

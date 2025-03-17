import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

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

          <Typography variant="h5" sx={{marginBottom: '20px !important', justifySelf: 'center'}}>Create New Account</Typography>

          <Box sx={{marginBottom: "20px"}}>
            <Typography>Name</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter FullName"
            />
          </Box>
          <Box sx={{marginBottom: "20px"}}>
            <Typography>Mobile No</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter Mobile No."
              defaultValue="8587961435"
            />
          </Box>
          <Box sx={{marginBottom: "20px"}}>
            <Typography>Email Id</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter Email Id"
            />
          </Box>
          <Box sx={{marginBottom: "20px"}}>
            <Typography>User Type</Typography>
            <FormControl fullWidth>
              <Select
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
              >
                <MenuItem value="select">Select</MenuItem>
                <MenuItem value="owner">Owner</MenuItem>
                <MenuItem value="tenant">Tenant</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my={2}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="I agree to the terms and conditions"
            />
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#0a50d8", color: "#fff", fontSize: "16px" }}
          >
            SIGNUP
          </Button>

          <Typography textAlign="center" mt={2}>
            Already have an account? <Link href="/login">Login</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignupPage;

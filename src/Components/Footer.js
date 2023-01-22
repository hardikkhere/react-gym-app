import React from "react";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../assets/images/Logo-1.png";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography fontSize="18px" variant="h5" pb="40px" mt="20px">
          Made with 💌 by Hardik
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;

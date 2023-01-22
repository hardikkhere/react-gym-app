import React from "react";
import { Stack } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      wwidth="100%"
    >
      <InfinitySpin color="gray"></InfinitySpin>
    </Stack>
  );
};

export default Loader;

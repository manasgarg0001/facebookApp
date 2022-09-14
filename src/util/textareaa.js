import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { InputAdornment } from "@mui/material";

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        label="Status"
        id="fullWidth"
        placeholder="whats on your mind paul?"
        InputProps={{
          endAdornment: (
            <InputAdornment position="End">
              <ArrowUpwardIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

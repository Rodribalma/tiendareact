import React from "react";
import { IconButton, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ItemCount = ({ cantidad, onAdd, onSub }) => {
  return (
    <Grid container direction="row" spacing="2">
      <Grid item xs={4} align="center">
        <IconButton aria-label="sub" onClick={onSub} color="primary">
          <RemoveIcon />
        </IconButton>
      </Grid>
      <Grid item xs={4} align="center">
        <Typography variant="h6" gutterBottom align="center">
          {cantidad}
        </Typography>
      </Grid>
      <Grid item xs={4} align="center">
        <IconButton aria-label="sub" onClick={onAdd} color="primary">
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ItemCount;

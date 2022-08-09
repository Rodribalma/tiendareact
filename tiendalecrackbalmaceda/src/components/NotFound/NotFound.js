import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();
  const currentUrl = useLocation();

  useEffect(() => {
    if (currentUrl.pathname !== "/notfound") navigate("/notfound");
  }, [currentUrl.pathname, navigate]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Typography variant="h4" gutterBottom>
        Not Found
      </Typography>
    </Grid>
  );
};
export default NotFound;

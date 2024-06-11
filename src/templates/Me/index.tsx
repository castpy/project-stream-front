"use client";
import React, { useEffect } from "react";
import useMe from "./useMe";
import { Box, CircularProgress, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const MeTemplate = () => {
  const { customer, currentCookie, handleGetMeService, loading } = useMe();

  useEffect(() => {
    if (currentCookie) {
      handleGetMeService();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCookie]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {customer ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ width: 150, height: 150 }}
            alt={customer.name as string}
            title={customer.name as string}
          >
            {customer.name?.charAt(0) || "A"}
          </Avatar>
          <Typography variant="h4">{customer.name}</Typography>
          <Typography variant="body1">{customer.email}</Typography>
        </Box>
      ) : loading ? (
        <CircularProgress />
      ) : (
        <Typography variant="h4">No customer</Typography>
      )}
    </Box>
  );
};

export default MeTemplate;

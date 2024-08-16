import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
const HealthyLivingCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: "#e0f7fa",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  "&:hover": {
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
    transform: "scale(1.02)",
    transition: "all 0.3s ease-in-out",
  },
}));
const HealthyLiving = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <HealthyLivingCard>
        <CardContent>
          <Typography variant="h4" component="div" sx={{ fontWeight: "bold", color: "#00796b" }}>
            Healthy Living
          </Typography>
          <Typography variant="body1" component="div" sx={{ marginTop: 2 }}>
            Discover tips and strategies for maintaining a healthy lifestyle. From nutrition and exercise to mental well-being, explore a variety of resources to help you live your best life.
          </Typography>
        </CardContent>
      </HealthyLivingCard>
    </Box>
  );
};
export default HealthyLiving;
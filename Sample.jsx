import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

function LargeCard({ title, to }) {
  return (
    <Card
      sx={{
        width: 600, // Adjust width for a very large card
        height: 400, // Adjust height for a very large card
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #ccc", // Optional: Add border if needed
        boxShadow: "none", // Remove shadow for a clean look
        backgroundColor: "lightblue", // Light background color
        borderRadius: 2, // Optional: Rounded corners
        transition: "all 0.3s ease", // Smooth transition for hover effect
        "&:hover": {
          backgroundColor: "#e0e0e0", // Slightly darker background on hover
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow on hover
        },
      }}
    >
      <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
        <CardActionArea>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h4" component="div">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export default function CardGrid() {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item>
        <LargeCard title="Are you a donor?" to="/donor" />
      </Grid>
      <Grid item>
        <LargeCard title="Are you a recipient?" to="/recipient" />
      </Grid>
    </Grid>
  );
}

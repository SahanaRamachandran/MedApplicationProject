import { Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  InputBase,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
}));
const Navbar = ({ searchQuery, setSearchQuery, location, setLocation }) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ padding: 2 }}>
        {" "}
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
          }}
          component={Link}
          to="/home"
        >
          MedScape
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            displayEmpty
            sx={{ color: "white", marginRight: 2, fontWeight: "bold" }}
          >
            <MenuItem value="">
              <em>Location</em>
            </MenuItem>
            <MenuItem value="Coimbatore">Coimbatore</MenuItem>
            <MenuItem value="Chennai">Chennai</MenuItem>
          </Select>
          <SearchContainer>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ fontWeight: "bold" }}
            />
          </SearchContainer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;

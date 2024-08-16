import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { alpha, styled } from "@mui/material/styles"; 
import React from "react";
const FiltersContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  borderRadius: theme.shape.borderRadius,
}));
const Filters = ({
  gender,
  setGender,
  patientStories,
  setPatientStories,
  experience,
  setExperience,
  allFilters,
  setAllFilters,
  sortBy,
  setSortBy,
}) => {
  return (
    <FiltersContainer>
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Gender</InputLabel>
        <Select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          label="Gender"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Patient Stories</InputLabel>
        <Select
          value={patientStories}
          onChange={(e) => setPatientStories(e.target.value)}
          label="Patient Stories"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Good">Good</MenuItem>
          <MenuItem value="Bad">Bad</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Experience</InputLabel>
        <Select
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          label="Experience"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Less than 5 years">Less than 5 years</MenuItem>
          <MenuItem value="5-10 years">5-10 years</MenuItem>
          <MenuItem value="More than 10 years">More than 10 years</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          label="Sort By"
        >
          <MenuItem value="Relevance">Relevance</MenuItem>
          <MenuItem value="Experience">Experience</MenuItem>
          <MenuItem value="Ratings">Ratings</MenuItem>
        </Select>
      </FormControl>
    </FiltersContainer>
  );
};
export default Filters;
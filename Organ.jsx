import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Footer from "../components/Footer";
import FooterNavBar from "../components/FooterNavBar";
import Navbar from "../components/NavBar";

// Styled component for hidden input
const Input = styled("input")({
  display: "none",
});

// DonationForm Component
const DonationForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    dob: "",
    phoneNumber: "",
    aadhaarNumber: "",
    gender: "",
    address: "",
    familyHistory: "",
    organs: [],
    registrationDate: "",
    confirm: false,
    informFamily: false,
    keepCard: false,
    submitToRegistry: false,
    donorSignature: null,
    doctorSignature: null,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  const handleOrganChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      if (checked) {
        return { ...prevState, organs: [...prevState.organs, value] };
      } else {
        return {
          ...prevState,
          organs: prevState.organs.filter((organ) => organ !== value),
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container
      sx={{
        backgroundImage:
          "url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/49d7c9104685587.5f68c1b07963b.jpg)",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          width: "100%",
          maxWidth: "600px",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Organ Donation Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date of Birth"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Aadhaar Number"
            name="aadhaarNumber"
            value={formData.aadhaarNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Gender</InputLabel>
            <Select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Family History Illnesses</FormLabel>
            <RadioGroup
              name="familyHistory"
              value={formData.familyHistory}
              onChange={handleChange}
            >
              <FormControlLabel
                value="asthma"
                control={<Radio />}
                label="Asthma"
              />
              <FormControlLabel
                value="cardiovascular"
                control={<Radio />}
                label="Cardiovascular Disease"
              />
              <FormControlLabel
                value="diabetes"
                control={<Radio />}
                label="Diabetes Mellitus"
              />
              <FormControlLabel
                value="hypertension"
                control={<Radio />}
                label="Hypertension"
              />
              <FormControlLabel
                value="tuberculosis"
                control={<Radio />}
                label="Tuberculosis"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            label="Date of Registration"
            name="registrationDate"
            value={formData.registrationDate}
            onChange={handleChange}
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Organs to be donated</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  name="organs"
                  value="liver"
                  checked={formData.organs.includes("liver")}
                  onChange={handleOrganChange}
                />
              }
              label="Liver"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="organs"
                  value="kidney"
                  checked={formData.organs.includes("kidney")}
                  onChange={handleOrganChange}
                />
              }
              label="Kidney"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="organs"
                  value="pancreas"
                  checked={formData.organs.includes("pancreas")}
                  onChange={handleOrganChange}
                />
              }
              label="Pancreas"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="organs"
                  value="heart"
                  checked={formData.organs.includes("heart")}
                  onChange={handleOrganChange}
                />
              }
              label="Heart"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="organs"
                  value="cornea"
                  checked={formData.organs.includes("cornea")}
                  onChange={handleOrganChange}
                />
              }
              label="Cornea"
            />
          </FormControl>
          <FormControl component="fieldset" margin="normal">
            <FormControlLabel
              control={
                <Checkbox
                  name="confirm"
                  checked={formData.confirm}
                  onChange={handleChange}
                />
              }
              label="I confirm that the information I provided in this document is accurate and true."
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="informFamily"
                  checked={formData.informFamily}
                  onChange={handleChange}
                />
              }
              label="I acknowledge that I have to inform my family about this registration."
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="keepCard"
                  checked={formData.keepCard}
                  onChange={handleChange}
                />
              }
              label="I confirm that I always need to keep the organ donor card and the document that came with it."
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="submitToRegistry"
                  checked={formData.submitToRegistry}
                  onChange={handleChange}
                />
              }
              label="I allow my information to be submitted to donor registry."
            />
          </FormControl>
          <Box mt={2}>
            <FormLabel component="legend">Upload Signatures</FormLabel>
            <Box mt={1} mb={2}>
              <label htmlFor="donorSignature">
                <Input
                  accept="image/*"
                  id="donorSignature"
                  type="file"
                  name="donorSignature"
                  onChange={handleFileChange}
                />
                <Button variant="contained" component="span">
                  Upload Donor Signature
                </Button>
              </label>
            </Box>
            <Box mb={2}>
              <label htmlFor="doctorSignature">
                <Input
                  accept="image/*"
                  id="doctorSignature"
                  type="file"
                  name="doctorSignature"
                  onChange={handleFileChange}
                />
                <Button variant="contained" component="span">
                  Upload Doctor Signature
                </Button>
              </label>
            </Box>
          </Box>
          <Box mt={3}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

const Organ = () => {
  return (
    <div>
      <Navbar />
      <DonationForm />
      <FooterNavBar />
      <Footer />
    </div>
  );
};

export default Organ;

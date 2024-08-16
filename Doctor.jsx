import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

// Array of doctors with different specialties and locations
const doctors = [
  {
    image:
      "https://img.freepik.com/free-photo/irritated-young-male-doctor-wearing-medical-robe-stethoscope-around-neck-looking-camera-making-pistol-gesture-pointing-up-isolated-olive-green-background_141793-136169.jpg?t=st=1723088541~exp=1723092141~hmac=01c197e1b681e6f9593cf839ae2239533651f476f5be93a4ed5f0c6e098aa78c&w=996",
    name: "Dr. Duraisamy Palanisamy",
    specialty: "Diabetician",
    experience: "17 years experience overall",
    location: "Thudiyalur, Coimbatore",
    fee: "₹1000 Consultation fee at clinic",
    rating: "98% (29 Patient Stories)",
    available: "Available Tomorrow",
  },
  {
    image:
      "https://img.freepik.com/free-photo/smiling-young-female-doctor-wearing-medical-robe-stethoscope-sitting-desk-with-medical-tools-laptop-pointing-up-isolated-white-wall_141793-59598.jpg?ga=GA1.1.788875083.1722436860&semt=ais_hybrid",
    name: "Dr. Suganya Anandaraman",
    specialty: "Gynecologist/Obstetrician",
    experience: "17 years experience overall",
    location: "Saibaba Colony, Coimbatore",
    fee: "₹1000 Consultation fee at clinic",
    rating: "93% (15 Patient Stories)",
    available: "Available Tomorrow",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/indian-female-doctor-indian-nurse_714173-201.jpg",
    name: "Dr. Aisha Johnson",
    specialty: "Pediatrician",
    experience: "12 years experience overall",
    location: "Indiranagar, Bangalore",
    fee: "₹1200 Consultation fee at clinic",
    rating: "95% (22 Patient Stories)",
    available: "Available Tomorrow",
  },
  {
    image:
      "https://img.freepik.com/free-photo/front-view-female-doctor-with-medical-mask-hairnet-posing_23-2148847633.jpg?ga=GA1.1.788875083.1722436860&semt=ais_hybrid",
    name: "Dr. Elena Rodriguez",
    specialty: "Cardiologist",
    experience: "20 years experience overall",
    location: "Gachibowli, Hyderabad",
    fee: "₹1500 Consultation fee at clinic",
    rating: "97% (18 Patient Stories)",
    available: "Available Tomorrow",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/ai-image_590832-363.jpg?ga=GA1.1.788875083.1722436860&semt=ais_hybrid",
    name: "Dr. Mohammed Ali",
    specialty: "Neurologist",
    experience: "15 years experience overall",
    location: "Jayanagar, Bangalore",
    fee: "₹1400 Consultation fee at clinic",
    rating: "96% (20 Patient Stories)",
    available: "Available Tomorrow",
  },
  {
    image:
      "https://img.freepik.com/free-photo/female-doctor-hospital_23-2148827760.jpg?ga=GA1.1.788875083.1722436860&semt=ais_hybrid",
    name: "Dr. Neha Shah",
    specialty: "Dermatologist",
    experience: "8 years experience overall",
    location: "MG Road, Pune",
    fee: "₹900 Consultation fee at clinic",
    rating: "92% (10 Patient Stories)",
    available: "Available Tomorrow",
  },
  {
    image:
      "https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17840.jpg?ga=GA1.1.788875083.1722436860&semt=ais_hybrid",
    name: "Dr. Rohan Desai",
    specialty: "Orthopedic Surgeon",
    experience: "10 years experience overall",
    location: "Andheri, Mumbai",
    fee: "₹1300 Consultation fee at clinic",
    rating: "94% (16 Patient Stories)",
    available: "Available Tomorrow",
  },
  {
    image:
      "https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-66970.jpg?ga=GA1.1.788875083.1722436860&semt=ais_hybrid",
    name: "Dr. Priya Mehra",
    specialty: "ENT Specialist",
    experience: "11 years experience overall",
    location: "Connaught Place, Delhi",
    fee: "₹1100 Consultation fee at clinic",
    rating: "97% (19 Patient Stories)",
    available: "Available Tomorrow",
  },
  {
    image:
      "https://img.freepik.com/free-psd/doctor-preparing-routine-medical-check_23-2150493308.jpg?ga=GA1.1.788875083.1722436860&semt=ais_hybrid",
    name: "Dr. Anjali Verma",
    specialty: "Psychiatrist",
    experience: "18 years experience overall",
    location: "Sector 18, Noida",
    fee: "₹1200 Consultation fee at clinic",
    rating: "98% (25 Patient Stories)",
    available: "Available Tomorrow",
  },
  {
    image:
      "https://img.freepik.com/free-photo/front-view-young-male-doctor-white-suit-with-blue-stethoscope-posing_140725-29601.jpg?ga=GA1.1.788875083.1722436860&semt=ais_hybrid",
    name: "Dr. Sanjay Kumar",
    specialty: "Pulmonologist",
    experience: "14 years experience overall",
    location: "Salt Lake, Kolkata",
    fee: "₹1000 Consultation fee at clinic",
    rating: "95% (22 Patient Stories)",
    available: "Available Tomorrow",
  },
  {
    image:
      "https://img.freepik.com/free-photo/middle-aged-woman-doctor-wearing-white-coat-with-stethoscope-looking-camera-smiling-cheerfully-pointing-with-both-hands-fingers-side-standing-blue-background_141793-21454.jpg?t=st=1723057267~exp=1723060867~hmac=0be480ed64aa714bafefe544973224e0003cbdf148034e7fc85aef88087fa4d5&w=996",
    name: "Dr. Kavita Joshi",
    specialty: "Rheumatologist",
    experience: "13 years experience overall",
    location: "Banjara Hills, Hyderabad",
    fee: "₹1100 Consultation fee at clinic",
    rating: "96% (18 Patient Stories)",
    available: "Available Tomorrow",
  },
  {
    image:
      "https://img.freepik.com/free-photo/male-doctor-with-stethoscope-standing-looking-camera_114579-72885.jpg?ga=GA1.1.788875083.1722436860&semt=ais_hybridd",
    name: "Dr. Rahul Singh",
    specialty: "Oncologist",
    experience: "16 years experience overall",
    location: "Nungambakkam, Chennai",
    fee: "₹1600 Consultation fee at clinic",
    rating: "97% (27 Patient Stories)",
    available: "Available Tomorrow",
  },
  {
    image:
      "https://img.freepik.com/free-photo/portrait-young-female-doctor_329181-9242.jpg?ga=GA1.1.788875083.1722436860&semt=ais_hybrid",
    name: "Dr. Meena Reddy",
    specialty: "Gastroenterologist",
    experience: "19 years experience overall",
    location: "Indiranagar, Bangalore",
    fee: "₹1500 Consultation fee at clinic",
    rating: "98% (30 Patient Stories)",
    available: "Available Tomorrow",
  },
  {
    image:
      "https://img.freepik.com/free-photo/doctor-examines-patient-medicine-health-care-concept_1328-3146.jpg?ga=GA1.1.788875083.1722436860&semt=ais_hybrid",
    name: "Dr. Vikram Patel",
    specialty: "Endocrinologist",
    experience: "15 years experience overall",
    location: "Viman Nagar, Pune",
    fee: "₹1400 Consultation fee at clinic",
    rating: "96% (21 Patient Stories)",
    available: "Available Tomorrow",
  },
  {
    image:
      "https://img.freepik.com/free-photo/medium-shot-smiley-doctor-with-crossed-arms_23-2149355015.jpg?ga=GA1.1.788875083.1722436860&semt=ais_hybrid",
    name: "Dr. Alok Gupta",
    specialty: "Nephrologist",
    experience: "14 years experience overall",
    location: "Sector 62, Noida",
    fee: "₹1300 Consultation fee at clinic",
    rating: "95% (20 Patient Stories)",
    available: "Available Tomorrow",
  },
];

const DoctorList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter doctors based on search query
  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ p: 2 }}
    >
      {/* Search Bar */}
      <TextField
        label="Search Doctors or Specialties"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{ mb: 3, width: "80%", maxWidth: "400px" }}
      />

      {/* Doctor Cards */}
      {filteredDoctors.length > 0 ? (
        filteredDoctors.map((doctor, index) => (
          <Card key={index} sx={{ maxWidth: 800, m: 2, borderRadius: 2 }}>
            <CardMedia
              component="img"
              alt={`Photo of ${doctor.name}`}
              height="340"
              image={doctor.image}
              title={doctor.name}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {doctor.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {doctor.specialty}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {doctor.experience}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {doctor.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {doctor.fee}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {doctor.rating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {doctor.available}
              </Typography>
              <Box mt={2} display="flex" justifyContent="space-between">
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                  Book Clinic Visit
                </Button>
                <Button variant="outlined" color="primary">
                  Book Video Consult
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body1" color="text.secondary" sx={{ mt: 3 }}>
          No doctors found. Try a different search term.
        </Typography>
      )}
    </Box>
  );
};

export default DoctorList;

import {
  Container,
  createTheme,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Georgia", "Times New Roman", "serif"].join(","),
  },
  palette: {
    primary: {
      main: "#006400", // Green color
    },
    secondary: {
      main: "#ff6f00", // Orange color
    },
  },
});

const AboutUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        id="main container"
        style={{
          color: "black",
          zIndex: 1,
          paddingTop: 30,
          paddingBottom: 30,
          borderRadius: 30,
          paddingRight: 70,
          paddingLeft: 70,
          background: "white",
        }}
      >
        <Paper
          elevation={10}
          style={{
            padding: 100,
            borderRadius: 30,
            backgroundImage:
              'url("https://images.unsplash.com/photo-1589758438368-9e0b798b0286")',
            backgroundSize: "cover",
            boxShadow: "4 4 4 4",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            style={{ color: theme.palette.primary.main }}
          >
            <center>Welcome to MedScape,</center>
            <span
              role="img"
              aria-label="Medical Emoji"
              style={{
                fontFamily: "fantasy",
                fontSize: "1em",
                margin: "0 10px",
              }}
            ></span>{" "}
            🩺 Your Trusted Health Companion,
            <center>Connecting You to Better Health!🌟</center>
            <span
              role="img"
              aria-label="Medical Emoji"
              style={{
                fontFamily: "initial",
                fontSize: "2em",
                margin: "0 10px",
              }}
            ></span>
          </Typography>
          <br />
          <Typography variant="body1" paragraph style={{ color: "black" }}>
            <strong>Dear Health Seeker,</strong>
            <br />
            <br />
            Welcome to MedScape – your reliable partner in navigating the world
            of health and wellness. Whether you're looking for medical
            information or connecting with healthcare professionals, our
            platform is here to support your journey towards better health.
          </Typography>
          <Typography variant="body1" paragraph style={{ color: "black" }}>
            <br />
            <strong>Why Choose MedScape?</strong>
            <br />
            <span
              role="img"
              aria-label="Stethoscope Emoji"
              style={{ fontSize: "1.6em", margin: "0 8px" }}
            >
              🩺
            </span>{" "}
            Comprehensive Health Resources: Access a vast repository of medical
            articles, health tips, and wellness guides. Stay informed with the
            latest updates and expert advice.
            <br />
            <span
              role="img"
              aria-label="Doctor Emoji"
              style={{ fontSize: "1.6em", margin: "0 8px" }}
            >
              👩‍⚕️
            </span>{" "}
            Connect with Experts: Find and connect with trusted healthcare
            professionals. Book appointments, consult online, and get
            personalized care from the comfort of your home.
            <br />
            <span
              role="img"
              aria-label="Hospital Emoji"
              style={{ fontSize: "1.6em", margin: "0 8px" }}
            >
              🏥
            </span>{" "}
            Empower Your Health: Utilize our tools and resources to track your
            health progress. From fitness trackers to symptom checkers, we
            empower you to take control of your health journey.
          </Typography>
          <Typography variant="body1" paragraph style={{ color: "black" }}>
            <br />
            <strong>Start Your Health Journey Today!</strong>
            <br />
            <span
              role="img"
              aria-label="Star Emoji"
              style={{ fontSize: "1.6em", margin: "0 8px" }}
            >
              🌟
            </span>{" "}
            Explore our extensive library of health information.{" "}
            <span
              role="img"
              aria-label="Book Emoji"
              style={{ fontSize: "1.6em", margin: "0 8px" }}
            >
              📖
            </span>{" "}
            Schedule consultations with top healthcare professionals.{" "}
            <span
              role="img"
              aria-label="Heart Emoji"
              style={{ fontSize: "1.6em", margin: "0 8px" }}
            >
              ❤️
            </span>{" "}
            Join our community of health enthusiasts and share your experiences.{" "}
            <span
              role="img"
              aria-label="Camera Emoji"
              style={{ fontSize: "1.6em", margin: "0 8px" }}
            >
              📸
            </span>{" "}
            Document your health journey and inspire others.
          </Typography>
          <Typography variant="body1" paragraph style={{ color: "black" }}>
            <br />
            Thank you for choosing MedScape. Let's embark on a journey towards
            better health and wellness together.
            <br />
            <br />
            Stay Healthy!
            <br />
            <strong>The MedScape Team</strong>
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};
export default AboutUs;

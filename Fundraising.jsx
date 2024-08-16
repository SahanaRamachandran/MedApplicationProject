import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import Footer from "../components/Footer";
import FooterNavBar from "../components/FooterNavBar";
import Navbar from "../components/NavBar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const donations = [
  { id: 1, name: "Save Life Charitable Trust", amount: 20813, type: "Trust" },
  { id: 2, name: "VIKRANT SAPALIGA", amount: 7500, type: "Person" },
  { id: 3, name: "Purushotham Shenoy T", amount: 5000, type: "Person" },
  { id: 4, name: "Sneha Shetty", amount: 4000, type: "Person" },
  { id: 5, name: "Manana Rao", amount: 4000, type: "Person" },
  { id: 6, name: "SMT.UMA.A", amount: 5000, type: "Person" },
  { id: 7, name: "Well Wisher", amount: 5000, type: "Anonymous" },
  // Add more donations here
];

const Fundraiser = () => {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_6h9MDrP5FpYbeO",
      amount: 92597 * 100,
      currency: "INR",
      name: "Save Life Charitable Trust",
      description: "Donation for Sathwik's Kidney Transplant",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Donor Name",
        email: "donor@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Donor Address",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const data = {
    labels: ["Start", "Now", "Goal"],
    datasets: [
      {
        label: "Funds",
        data: [0, 92597, 1000000],
        fill: false,
        borderColor: "red",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Funds Raised",
      },
    },
  };

  return (
    <div>
      <Navbar />
      <Container
        sx={{
          backgroundImage: "url(https://your-background-image-url)",
          backgroundSize: "cover",
          minHeight: "100vh",
          padding: 4,
        }}
      >
        <Paper
          sx={{
            maxWidth: "800px",
            margin: "auto",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            border: "1px solid #ddd",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#ffcccc",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <Typography variant="h5" sx={{ color: "red" }}>
              🚨 This fundraiser is in urgent need of funds 🚨
            </Typography>
          </Box>
          <Typography
            variant="h3"
            gutterBottom
            align="center"
            sx={{
              color: "#3f51b5",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
            }}
          >
            Help 17 Year Old Sathwik To Undergo Kidney Transplant Surgery
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            marginBottom="20px"
          >
            <Box width="48%">
              <img
                src="https://kettocdn.gumlet.io/media/campaign/934000/934447/image/66af8a4a46ff7.jpg?w=480&dpr=1.5"
                alt="Sathwik and Family"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                }}
              />
            </Box>
            <Box width="48%">
              <img
                src="https://kettocdn.gumlet.io/media/campaign/934000/934447/image/66af8a367f1ed.jpg?w=480&dpr=1.5"
                alt="Fundraiser Details"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                }}
              />
            </Box>
          </Box>
          <Box textAlign="center" marginBottom="20px">
            <Typography
              variant="h4"
              sx={{
                color: "#f50057",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              ₹ 92,597
            </Typography>
            <Typography variant="body1" sx={{ color: "#757575" }}>
              raised of ₹ 10,00,000 goal
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              gap="20px"
              marginBottom="20px"
            >
              <Box textAlign="center">
                <Typography
                  variant="h6"
                  sx={{
                    color: "#00c853",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  54
                </Typography>
                <Typography variant="body2" sx={{ color: "#757575" }}>
                  supporters
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h6"
                  sx={{
                    color: "#00c853",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  44
                </Typography>
                <Typography variant="body2" sx={{ color: "#757575" }}>
                  days left
                </Typography>
              </Box>
            </Box>
            <Line data={data} options={options} />
            <button
              onClick={handlePayment}
              style={{
                padding: "10px 20px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                marginBottom: "20px",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
            >
              Donate Now
            </button>
            <Box>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#1877f2",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  marginRight: "10px",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#1558b6")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#1877f2")}
              >
                <FontAwesomeIcon icon={faFacebook} /> Share
              </button>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#1da1f2",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  marginRight: "10px",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#1981d4")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#1da1f2")}
              >
                <FontAwesomeIcon icon={faTwitter} /> Tweet
              </button>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#25d366",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#1ebd55")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#25d366")}
              >
                <FontAwesomeIcon icon={faWhatsapp} /> Share
              </button>
            </Box>
          </Box>
          <Box
            textAlign="left"
            backgroundColor="#f8f9fa"
            padding="20px"
            borderRadius="10px"
            marginBottom="20px"
            border="1px solid #ddd"
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: "#3f51b5",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              About the Fundraiser
            </Typography>
            <Typography variant="body1" paragraph>
              Sathwik is a 17-year-old boy pursuing his education from S.V.S
              School, Bantwal. He stays with his parents. His father works as a
              Technician, and his mother is a housewife.
            </Typography>
            <Typography variant="body1" paragraph>
              Two months ago, he fell unconscious and was admitted to a
              hospital. Upon evaluation, it was found that he had only one
              kidney by birth and that too failed.
            </Typography>
            {/* Add more fundraiser details here */}
          </Box>
          <Divider />
          <Box marginTop="20px">
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: "#3f51b5",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              Top Donations
            </Typography>
            <List>
              {donations.map((donation) => (
                <ListItem
                  key={donation.id}
                  sx={{
                    backgroundColor: "#f8f9fa",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                  }}
                >
                  <ListItemAvatar>
                    <AccountCircleIcon />
                  </ListItemAvatar>
                  <ListItemText
                    primary={donation.name}
                    secondary={`₹${donation.amount} - ${donation.type}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
      </Container>
      <FooterNavBar />
      <Footer />
    </div>
  );
};

export default Fundraiser;

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Button,
  Checkbox,
  createTheme,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import backgroundVideo from "../videos/background.mp4"; // Adjust the path if necessary
import "./login.css";
const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post("http://localhost:8080/api/login", {
          firstname: name,
          password: password,
        });
        if (response.status === 200) {
          login(name);
          navigate("/home");
        } else {
          setError("Invalid username or password");
        }
      } catch (error) {
        console.error("Login failed", error.response?.data || error.message);
        setError("Invalid username or password");
      }
    }
  };
  const validate = () => {
    let result = true;
    if (name === "" || name === null) {
      result = false;
      setError("Enter your username");
    } else if (password === "" || password === null) {
      result = false;
      setError("Password cannot be empty");
    } else {
      setError("");
    }
    return result;
  };
  return (
    <div className="login-page-wrapper">
      {/* Background video */}
      <video className="background-video" autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ThemeProvider theme={theme}>
        <Paper elevation={10} className="login-paper">
          <br />
          <center>
            <Typography
              style={{ fontSize: "50px", fontFamily: "initial", color: "#333" }}
            >
              Login Page
            </Typography>
            <br />
            <br />
            <TextField
              id="standard-textarea-username"
              label="Username"
              variant="standard"
              placeholder="Enter username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputLabelProps={{ style: { color: "#333" } }}
              InputProps={{ style: { color: "#333" } }}
            />
            <br />
            <br />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              id="outlined-basic"
              variant="standard"
              autoComplete="new-password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                style: { color: "#333" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityIcon style={{ color: "#333" }} />
                      ) : (
                        <VisibilityOffIcon style={{ color: "#333" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ style: { color: "#333" } }}
            />
            <br />
            <Checkbox color="primary" style={{ color: "#333" }} /> Remember me
            <br />
            <br />
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
            <br />
            <br />
            <br />
            <Link
              to="/signup"
              style={{
                color: "darkblue",
                textDecoration: "none",
              }}
            >
              {"Don't have an account?"}
            </Link>
            &emsp;&emsp;&emsp;
            <Link
              href="#"
              underline="hover"
              style={{
                color: "darkblue",
                textDecoration: "none",
              }}
            >
              {"forgot password?"}
            </Link>
          </center>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </Paper>
      </ThemeProvider>
    </div>
  );
};
export default LoginPage;

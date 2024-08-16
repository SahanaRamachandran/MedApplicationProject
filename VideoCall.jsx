import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  function handleJoin() {
    navigate(`/room/${roomId}`);
  }

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <h1 style={styles.heading}>Emergency Video Call</h1>
        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleJoin} style={styles.button}>
          Join
        </button>
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily:
      '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Sans", Arial, sans-serif',
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(21, 102, 155)",
    width: "800px",
    height: "350px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    color: "white",
  },
  input: {
    width: "100%",
    maxWidth: "250px",
    height: "35px",
    fontSize: "1.25rem",
    marginBottom: "20px",
    padding: "5px 10px",
    border: "2px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100px",
    height: "40px",
    fontSize: "16px", // Adjusted font-size for better readability
    backgroundColor: "rgb(114, 190, 196)",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  heading: {
    marginBottom: "20px",
  },
};

export default App;

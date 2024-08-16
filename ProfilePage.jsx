import React, { useState } from "react";
const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bloodGroup: "",
    geneticDisorders: "",
    medicalHistory: "",
  });
  const [hover, setHover] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profile);
  };
  const handlePhotoUpload = (e) => {
    console.log("Photo uploaded");
  };
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div style={styles.container}>
      <div style={styles.profileIcon}>
        <img
          src="https://via.placeholder.com/200"
          alt="Profile"
          style={styles.profileImage}
        />
        <button
          onClick={handlePhotoUpload}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={
            hover
              ? { ...styles.photoButton, ...styles.photoButtonHover }
              : styles.photoButton
          }
        >
          Add Photo
        </button>
      </div>
      <form style={styles.profileForm} onSubmit={handleSubmit}>
        {renderInputField("Name", "name", profile.name, handleChange)}
        {renderInputField("Email", "email", profile.email, handleChange)}
        {renderInputField("Phone", "phone", profile.phone, handleChange)}
        {renderInputField("Address", "address", profile.address, handleChange)}
        {renderInputField(
          "Blood Group",
          "bloodGroup",
          profile.bloodGroup,
          handleChange
        )}
        {renderTextAreaField(
          "Genetic Disorders",
          "geneticDisorders",
          profile.geneticDisorders,
          handleChange
        )}
        {renderTextAreaField(
          "Medical History",
          "medicalHistory",
          profile.medicalHistory,
          handleChange
        )}
        <button
          type="submit"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={
            hover ? { ...styles.button, ...styles.buttonHover } : styles.button
          }
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};
const renderInputField = (labelText, name, value, handleChange) => (
  <div style={styles.inputContainer}>
    <label style={styles.label}>{labelText}:</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      style={styles.input}
    />
  </div>
);
const renderTextAreaField = (labelText, name, value, handleChange) => (
  <div style={styles.inputContainer}>
    <label style={styles.label}>{labelText}:</label>
    <textarea
      name={name}
      value={value}
      onChange={handleChange}
      style={styles.textarea}
    />
  </div>
);
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
    width: "80%",
  },
  profileIcon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  profileImage: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
  },
  photoButton: {
    padding: "10px",
    marginTop: "10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  photoButtonHover: {
    backgroundColor: "#0056b3",
  },
  profileForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    width: "50%",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "80%",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease-in-out",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "80%",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease-in-out",
  },
  button: {
    padding: "10px",
    marginTop: "20px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease-in-out",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};
export default ProfilePage;
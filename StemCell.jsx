import axios from "axios";
import React, { useState } from "react";
import "./StemCell.css";

const StemCell = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    contactNumber: "",
    address: "",
    state: "",
    district: "",
    stemCells: "",
    expectingDate: "",
    previousComplications: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/post", formData)
      .then((response) => {
        console.log("Form Data Submitted:", response.data);
        setSuccess("Stem cell registration successful!");
        setError("");
        setFormData({
          name: "",
          age: "",
          gender: "",
          bloodGroup: "",
          contactNumber: "",
          address: "",
          state: "",
          district: "",
          stemCells: "",
          expectingDate: "",
          previousComplications: "",
        });
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
        setError("Failed to register stem cells. Please try again.");
        setSuccess("");
      });
  };

  return (
    <div className="container">
      <center>
        <h2>Stem Cell Registration</h2>
      </center>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="form-group">
          <label className="name">Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        {/* Age Field */}
        <div className="form-group">
          <label className="age">Age*</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            placeholder="Enter your age"
          />
        </div>

        {/* Gender Field */}
        <div className="form-group">
          <label className="gender">Gender*</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Blood Group Field */}
        <div className="form-group">
          <label>Blood Group*</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        {/* Contact Number Field */}
        <div className="form-group">
          <label>Contact Number*</label>
          <input
            type="tel"
            name="contactNumber" // Corrected name attribute
            value={formData.contactNumber}
            onChange={handleChange}
            required
            placeholder="+91 Enter your contact number"
            pattern="[0-9]{10}" // Optional pattern for a 10-digit number
          />
        </div>

        {/* Address Field */}
        <div className="form-group">
          <label>Address*</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter your full address"
            rows="3"
          />
        </div>

        {/* State Field */}
        <div className="form-group">
          <label>State*</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            <option value="Tamilnadu">TamilNadu</option>
            <option value="Kerala">Kerala</option>
            <option value="Karnataka">Karnataka</option>
          </select>
        </div>

        {/* District Field */}
        <div className="form-group">
          <label>District/City*</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
            placeholder="Enter your district or city"
          />
        </div>

        {/* Stem Cells Field */}
        <div className="form-group">
          <label>Stem Cells*</label>
          <input
            type="text"
            name="stemCells"
            value={formData.stemCells}
            onChange={handleChange}
            required
            placeholder="Enter stem cell details"
          />
        </div>

        {/* Expecting Date Field */}
        <div className="form-group">
          <label>Expecting Date</label>
          <input
            type="date"
            name="expectingDate"
            value={formData.expectingDate}
            onChange={handleChange}
          />
        </div>

        {/* Previous Complications Field */}
        <div className="form-group">
          <label>Previous Complications</label>
          <textarea
            name="previousComplications"
            value={formData.previousComplications}
            onChange={handleChange}
            placeholder="Describe any previous complications"
            rows="3"
          />
        </div>

        <center>
          <button type="submit">Submit</button>
        </center>
      </form>
      {/* Success and Error Messages at the bottom center */}
      <div className="message-container">
        {success && <div className="success-message">{success}</div>}
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default StemCell;
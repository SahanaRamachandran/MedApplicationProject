import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import FooterNavBar from "../components/FooterNavBar";
import Navbar from "../components/NavBar";
import "./Recipient.css"; // Ensure this CSS file is in the correct directory

const MedicalAidForm = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  const [needType, setNeedType] = React.useState("");

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
      await axios.post("/api/submit-form", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Form submitted successfully!");
      reset();
    } catch (error) {
      alert("Error submitting form");
    }
  };

  const need = watch("need");

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="medical-aid-form">
        <h2>Medical Aid Application</h2>
        <label>Name:</label>
        <input type="text" {...register("name", { required: true })} />

        <label>Email:</label>
        <input type="email" {...register("email", { required: true })} />

        <label>Phone:</label>
        <input type="tel" {...register("phone", { required: true })} />

        <label>Address:</label>
        <input type="text" {...register("address", { required: true })} />

        <label>Aadhaar Number:</label>
        <input type="text" {...register("aadhaar", { required: true })} />

        <label>Secondary Contact Number:</label>
        <input
          type="tel"
          {...register("secondaryContact", { required: true })}
        />

        <label>When is it needed?</label>
        <input type="date" {...register("neededDate", { required: true })} />

        <label>What are you in need of?</label>
        <select
          {...register("need", { required: true })}
          onChange={(e) => setNeedType(e.target.value)}
        >
          <option value="">Select</option>
          <option value="blood">Blood</option>
          <option value="organ">Organ</option>
          <option value="cash">Cash for Surgery</option>
        </select>

        {need === "blood" && (
          <>
            <label>Blood Type:</label>
            <select {...register("bloodType", { required: true })}>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>

            <label>Units Needed:</label>
            <input type="number" {...register("units", { required: true })} />
          </>
        )}

        {need === "organ" && (
          <>
            <label>Organ Needed:</label>
            <select {...register("organType", { required: true })}>
              <option value="kidney">Kidney</option>
              <option value="liver">Liver</option>
              <option value="heart">Heart</option>
              <option value="lung">Lung</option>
            </select>

            <label>Blood Type:</label>
            <select {...register("bloodType", { required: true })}>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </>
        )}

        <label>Upload Proof:</label>
        <input type="file" {...register("proof", { required: true })} />

        <label>Your Signature:</label>
        <input type="file" {...register("signature", { required: true })} />

        <label>Hospital Sign:</label>
        <input type="file" {...register("hospitalSign", { required: true })} />

        <label>Doctor's Sign:</label>
        <input type="file" {...register("doctorSign", { required: true })} />

        <label>Additional Information:</label>
        <textarea {...register("additionalInfo")} rows="4"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const Recipient = () => {
  return (
    <div>
      <Navbar />
      <MedicalAidForm />
      <FooterNavBar />
      <Footer />
    </div>
  );
};

export default Recipient;

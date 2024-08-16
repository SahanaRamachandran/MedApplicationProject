// src/components/DietForm.js
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const DietForm = ({ onGeneratePlan }) => {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    gender: "male",
    activityLevel: "sedentary",
    goal: "maintain",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGeneratePlan(formData);
  };

  return (
    <Container>
      <center>
        <h2> Your Diet Plan</h2>
      </center>
      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="height"
          placeholder="Height (cm)"
          value={formData.height}
          onChange={handleChange}
        />
        <Select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        <Select
          name="activityLevel"
          value={formData.activityLevel}
          onChange={handleChange}
        >
          <option value="sedentary">Sedentary</option>
          <option value="light">Light Activity</option>
          <option value="moderate">Moderate Activity</option>
          <option value="active">Active</option>
          <option value="veryActive">Very Active</option>
        </Select>
        <Select name="goal" value={formData.goal} onChange={handleChange}>
          <option value="maintain">Maintain Weight</option>
          <option value="lose">Lose Weight</option>
          <option value="gain">Gain Weight</option>
        </Select>
        <center>
          <Button type="submit">Generate Diet Plan</Button>
        </center>
      </form>
    </Container>
  );
};

export default DietForm;

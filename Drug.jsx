import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Result = styled.div`
  margin-top: 20px;
`;

const Tips = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #e0f7fa;
  border-radius: 5px;
`;

const DrugRecover = () => {
  const [step, setStep] = useState(1);
  const [days, setDays] = useState("");
  const [amount, setAmount] = useState("");
  const [drugType, setDrugType] = useState("");
  const [frequency, setFrequency] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState(""); // New state for additional info
  const [result, setResult] = useState(null);

  const handleNext = () => {
    if (step === 1 && days && amount && drugType && frequency) {
      setStep(2);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === 2) {
      const daysNum = parseFloat(days);
      const amountNum = parseFloat(amount);

      if (
        !isNaN(daysNum) &&
        !isNaN(amountNum) &&
        daysNum > 0 &&
        amountNum > 0
      ) {
        const totalAmount = daysNum * amountNum;
        setResult(`Total amount of ${drugType} used: ${totalAmount} units`);
      } else {
        setResult("Please enter valid numbers for both fields.");
      }
    }
  };

  return (
    <Container>
      <h2>Drug Recovery Tracker</h2>
      {step === 1 && (
        <form>
          <FormGroup>
            <Label htmlFor="drugType">What type of drug did you use?</Label>
            <Input
              id="drugType"
              type="text"
              value={drugType}
              onChange={(e) => setDrugType(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="days">How many days did you use the drug?</Label>
            <Input
              id="days"
              type="number"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              min="1"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="amount">
              How much drug did you take each day (units)?
            </Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0.1"
              step="0.1"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="frequency">
              How often did you take the drug (e.g., daily, weekly)?
            </Label>
            <Input
              id="frequency"
              type="text"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="additionalInfo">
              Any additional information you’d like to share?
            </Label>
            <TextArea
              id="additionalInfo"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
            />
          </FormGroup>
          <Button type="button" onClick={handleNext}>
            Next
          </Button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleSubmit}>
          <p>
            You have entered:
            <br />
            <strong>{days}</strong> days of use
            <br />
            <strong>{amount}</strong> units per day
            <br />
            Type of drug: <strong>{drugType}</strong>
            <br />
            Frequency: <strong>{frequency}</strong>
            <br />
            Additional Information: <strong>{additionalInfo}</strong>
          </p>
          <Button type="submit">Calculate</Button>
        </form>
      )}
      {result && <Result>{result}</Result>}
      {result && (
        <Tips>
          <h3>Recovery Tips</h3>
          <p>
            1. *Stay Hydrated:* Drink plenty of water throughout the day to help
            your body flush out toxins.
          </p>
          <p>
            2. *Healthy Diet:* Include a balanced diet with fruits, vegetables,
            lean proteins, and whole grains.
          </p>
          <p>
            3. *Regular Exercise:* Engage in moderate exercise to improve
            overall health and well-being.
          </p>
          <p>
            4. *Seek Support:* Consider talking to a counselor or support group
            to help with emotional recovery.
          </p>
          <p>
            5. *Rest:* Ensure you get adequate sleep and rest to support your
            body s healing process.
          </p>
          <h3>Food Recommendations</h3>
          <p>
            1 *Fruits:* Berries, apples, oranges, and bananas are rich in
            vitamins and antioxidants.
          </p>
          <p>
            2 *Vegetables:* Leafy greens like spinach and kale, as well as
            cruciferous vegetables like broccoli.
          </p>
          <p>
            3 *Proteins:* Lean meats, fish, eggs, beans, and legumes provide
            essential proteins for repair and energy.
          </p>
          <p>
            4 *Whole Grains:* Foods like oats, brown rice, and quinoa offer
            sustained energy and fiber.
          </p>
          <p>
            5 *Healthy Fats:* Avocados, nuts, seeds, and olive oil support
            overall health and hormone balance.
          </p>
        </Tips>
      )}
    </Container>
  );
};

export default DrugRecover;

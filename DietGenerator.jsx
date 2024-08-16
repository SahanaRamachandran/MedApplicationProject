// // src/components/DietGenerator.js

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
  color: #333;
`;

const Plan = styled.div`
  margin: 20px 0;
`;

const MealSection = styled.div`
  margin-bottom: 20px;
`;

const MealTitle = styled.h3`
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none; /* Remove default bullets */
  padding-left: 0; /* Remove default padding */
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;

  &::before {
    content: "●"; /* Unicode character for a filled circle */
    color: #333; /* Bullet color */
    font-size: 18px; /* Size of the bullet */
    margin-right: 10px; /* Space between bullet and text */
  }
`;

const Calories = styled.p`
  margin-top: 10px;
  font-weight: bold;
`;

const DietGenerator = ({ formData }) => {
  const { age, weight, height, gender, activityLevel, goal } = formData;

  const calculateBMR = () => {
    if (gender === "male") {
      return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      return 10 * weight + 6.25 * height - 5 * age - 161;
    }
  };

  const calculateCaloricNeeds = (bmr) => {
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };
    return bmr * activityMultipliers[activityLevel];
  };

  const adjustCaloriesForGoal = (calories) => {
    const calorieAdjustment = {
      maintain: 0,
      lose: -500,
      gain: 500,
    };
    return calories + calorieAdjustment[goal];
  };

  const generateDietPlan = (calories) => {
    const mealPlans = {
      breakfast: {
        items: ["Oatmeal", "Banana", "Almond Milk"],
        calories: calories * 0.25,
      },
      lunch: {
        items: ["Grilled Chicken", "Quinoa", "Mixed Vegetables"],
        calories: calories * 0.35,
      },
      dinner: {
        items: ["Salmon", "Brown Rice", "Spinach Salad"],
        calories: calories * 0.3,
      },
      snacks: {
        items: ["Greek Yogurt", "Nuts", "Fruits"],
        calories: calories * 0.1,
      },
    };
    return mealPlans;
  };

  const bmr = calculateBMR();
  const dailyCalories = calculateCaloricNeeds(bmr);
  const adjustedCalories = adjustCaloriesForGoal(dailyCalories);
  const dietPlan = generateDietPlan(adjustedCalories);

  return (
    <Container>
      <center>
        <h2>Your Personalized Diet Plan</h2>
        <p>
          Based on your input, your daily caloric needs are approximately{" "}
          <strong>{Math.round(adjustedCalories)} calories</strong>.
        </p>
      </center>

      <MealSection>
        <MealTitle>Breakfast</MealTitle>
        <List>
          {dietPlan.breakfast.items.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
        <Calories>Calories: {Math.round(dietPlan.breakfast.calories)}</Calories>
      </MealSection>

      <MealSection>
        <MealTitle>Lunch</MealTitle>
        <List>
          {dietPlan.lunch.items.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
        <Calories>Calories: {Math.round(dietPlan.lunch.calories)}</Calories>
      </MealSection>

      <MealSection>
        <MealTitle>Dinner</MealTitle>
        <List>
          {dietPlan.dinner.items.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
        <Calories>Calories: {Math.round(dietPlan.dinner.calories)}</Calories>
      </MealSection>

      <MealSection>
        <MealTitle>Snacks</MealTitle>
        <List>
          {dietPlan.snacks.items.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
        <Calories>Calories: {Math.round(dietPlan.snacks.calories)}</Calories>
      </MealSection>
    </Container>
  );
};

export default DietGenerator;

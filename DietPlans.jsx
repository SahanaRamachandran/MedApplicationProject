import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    color: #333;
  }

  a {
    font-size: 14px;
    color: #0066cc;
    text-decoration: none;
  }
`;

// Card container
const CardContainer = styled.div`
  display: flex;
  gap: 40px; /* Increase gap for better spacing */
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;

  /* Conditional styling based on props */
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
`;

// Diet list section
const DietList = styled.div`
  flex: 1;
  padding: 20px;
  min-width: 300px;

  h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
    font-weight: bold; /* Make the topics bold */
  }

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }
`;

// Image section
const ImageSection = styled.div`
  flex: 1.5;
  min-width: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

// Each item in the diet list
const DietItem = styled.div`
  margin-bottom: 20px;
`;

// Personalized Diet Plan Section
const DietPlanSection = styled.div`
  text-align: center;
  margin: 40px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  h2 {
    font-size: 22px;
    color: #333;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 18px;
    color: #666;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
  }
`;

const DietPlans = () => {
  return (
    <Container>
      <Header>
        <h1>POPULAR DIET PLANS</h1>
        <a href="#">View All</a>
      </Header>

      <CardContainer>
        <DietList>
          <DietItem>
            <h3>Don’t Fall for Fad Diets</h3>
            <p>
              Get the real facts about fad diets, and learn some healthy weight
              loss strategies that really work.
            </p>
          </DietItem>
          <DietItem>
            <h3>High-Protein Diet for Weight Loss</h3>
            <p>
              Discover how high-protein diets may help you lose weight and feel
              full. Find out the best sources of protein for weight loss.
            </p>
          </DietItem>
          <DietItem>
            <h3>High-Protein, Low-Carb Diets</h3>
            <p>
              Learn how high protein/low carbohydrate diets work and their pros
              and cons for weight loss.
            </p>
          </DietItem>
          <DietItem>
            <h3>Rapid Weight Loss: Is It Safe?</h3>
            <p>
              Learn about rapid weight loss claims, types of diets, and the
              risks and benefits of rapid weight loss.
            </p>
          </DietItem>
        </DietList>
        <ImageSection>
          <img
            src="https://img.freepik.com/free-photo/top-view-arrangement-with-diet-planning-notepad_23-2149099889.jpg?ga=GA1.2.788875083.1722436860&semt=ais_hybrid"
            alt="Diet Planning Notepad"
          />
        </ImageSection>
      </CardContainer>

      <Header>
        <h1>HEALTHY WEIGHT RESOURCES</h1>
      </Header>
      <CardContainer reverse>
        <DietList>
          <DietItem>
            <h3>What Is a Healthy Weight?</h3>
            <p>
              You may wonder what a healthy weight is, and how to get there (and
              stay there) the right way.
            </p>
          </DietItem>
          <DietItem>
            <h3>Calculating Your Waist Circumference</h3>
            <p>
              Do you need to lose weight? Measuring your waist circumference is
              a good way to tell.
            </p>
          </DietItem>
          <DietItem>
            <h3>BMI Calculator</h3>
            <p>
              The BMI Calculator is an innovative tool that gives personalized
              results based on different weight and fitness measurements.
            </p>
          </DietItem>
        </DietList>
        <ImageSection>
          <img
            src="https://img.freepik.com/premium-photo/female-nutritionist-sitting-table-clinic-weighs-cabbage_1074916-20299.jpg?ga=GA1.1.788875083.1722436860"
            alt="Fruits and Vegetables"
          />
        </ImageSection>
      </CardContainer>

      <Header>
        <h1>Healthy Eating & Nutrition</h1>
      </Header>

      <CardContainer>
        <DietList>
          <DietItem>
            <h3>How to Get Your Vitamin D</h3>
            <p>
              Vitamin D is essential for healthy bones, and a lack of it can
              lead to health problems, including cardiovascular disease.
            </p>
          </DietItem>
          <DietItem>
            <h3>Are You Getting Enough Vitamin B12?</h3>
            <p>
              Vitamin B12 is essential for good health, but some people may not
              be getting enough.
            </p>
          </DietItem>
          <DietItem>
            <h3>What Are Phytochemicals?</h3>
            <p>
              Learn about the health benefits of phytonutrients, natural
              chemicals that are found in a variety of plant foods.
            </p>
          </DietItem>
          <DietItem>
            <h3>Types of Fiber and Their Health Benefits</h3>
            <p>
              There are several types of fiber. Each works differently in your
              body and gives you distinct health perks.
            </p>
          </DietItem>
        </DietList>
        <ImageSection>
          <img
            src="https://img.freepik.com/free-photo/brunette-woman-kitchen_23-2148173204.jpg?t=st=1723036777~exp=1723040377~hmac=40f7926f200c15f128ed67412793eab3c69253e983864ea48f6ccfc31bddf6af&w=996"
            alt="Diet Planning Notepad"
          />
        </ImageSection>
      </CardContainer>
    </Container>
  );
};

export default DietPlans;

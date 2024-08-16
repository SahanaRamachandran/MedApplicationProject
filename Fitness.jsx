// import React from 'react';
// import './Fitness.css'; // Ensure this CSS file is created

// const fitnessInfo = [
//   {
//     title: 'Cardio Exercises',
//     description: 'Cardio exercises help to improve cardiovascular health and endurance. Common cardio exercises include running, cycling, and swimming.',
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VpILH90HF5OOuErwKxdJGtN-zMO3Lo_NXw&s',
//   },
//   {
//     title: 'Strength Training',
//     description: 'Strength training involves lifting weights or using resistance bands to build muscle strength. It includes exercises like squats, deadlifts, and bench presses.',
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9V3pjSxHxXZORyKbbUPd95Hd7-Y-TsZLczA&s',
//   },
//   {
//     title: 'Flexibility Exercises',
//     description: 'Flexibility exercises increase the range of motion in muscles and joints. Examples include stretching, yoga, and Pilates.',
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtP9Gab8y6wYjdfBq5Cpcoms8j2mZcIaknOA&s',
//   },
//   {
//     title: 'Recovery and Rest',
//     description: 'Proper recovery and rest are crucial for muscle repair and growth. Techniques include rest days, stretching, and foam rolling.',
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDWnkvfJLDHn88Gf6l9RwuZwfdq4egfNmHiw&s',
//   },
// ];

// const Fitness = () => {
//   return (
//     <div className="fitness-exercise">
//       <h2>Fitness & Exercise</h2>
//       <p>Explore various aspects of fitness and exercise to enhance your health and well-being.</p>
//       <div className="fitness-info-section">
//         {fitnessInfo.map((info, index) => (
//           <div key={index} className="fitness-card">
//             <img src={info.img} alt={info.title} />
//             <h4>{info.title}</h4>
//             <p>{info.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Fitness;


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

const CardContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
`;

const DietList = styled.div`
  flex: 1;
  padding: 20px;
  min-width: 300px;

  h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }
`;

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

const DietItem = styled.div`
  margin-bottom: 20px;
`;

// const DietPlanSection = styled.div`
//   text-align: center;
//   margin: 40px 0;
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   background-color: #f9f9f9;

//   h2 {
//     font-size: 22px;
//     color: #333;
//     margin-bottom: 20px;
//   }

//   h3 {
//     font-size: 18px;
//     color: #666;
//     margin-bottom: 10px;
//   }

//   p {
//     font-size: 14px;
//     color: #333;
//     margin-bottom: 10px;
//   }
// `;

const Fitness = () => {
  return (
    <Container>
      <Header>
        <h1>EXERCISE AND FITNESS </h1>
    
      </Header>

      <CardContainer>
        <DietList>
          <DietItem>
            <h3>Exercise and Weight Loss</h3>
            <p>
            How to start working out if you want to achieve specific weight loss goals.
            </p>
          </DietItem>
          <DietItem>
            <h3>How Exercise Boosts Your Metabolism</h3>
            <p>
            Your next workout could set you up with a speedier metabolism.
            </p>
          </DietItem>
          <DietItem>
            <h3>Your Guide to Getting Started</h3>
            <p>
            Use these simple how-tos to start your personalized fitness plan.
            </p>
          </DietItem>
          <DietItem>
            <h3>Exercises for a Healthy Heart</h3>
            <p>
            Even taking a brisk walk for 30 minutes a day can make a big difference when it comes to exercising your heart muscle.
            </p>
          </DietItem>
        </DietList>
        <ImageSection>
          <img
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2023/04/muscular-man-barbell-back-squat.jpg?quality=82&strip=1&w=800"
            alt="Diet Planning Notepad"
          />
        </ImageSection>
      </CardContainer>

      <Header>
        <h1>TIPS FOR SUCCESS </h1>
      </Header>
      <CardContainer reverse>
        <DietList>
          <DietItem>
            <h3>No Gym? Exercise at Home</h3>
            <p>
            Use these tips to set up your at-home exercise routine.       
            </p>
          </DietItem>
          <DietItem>
            <h3>Take Your Workout to the Next Level</h3>
            <p>
            The best way to keep building muscle mass or burn calories is to make it a habit to switch up your workout.
            </p>
          </DietItem>
          <DietItem>
            <h3>Set Smarter Health Goals</h3>
            <p>
            Wouldn't it be nice if you knew exactly what to do to lose weight successfully? What you need is a fitness tracker and a smart goal.
            </p>
          </DietItem>
          <DietItem>
            <h3>Should You Get a Fitness Tracker?</h3>
            <p>
            What these devices do and how to pick the right one for you.
            </p>
          </DietItem>
        </DietList>
        <ImageSection>
          <img
            src="https://media.self.com/photos/5788e78f737bb3be07fb961f/master/pass/moves-correct-form_feat1.jpg"
            alt="Nutritionist Weighing Cabbage"
          />
        </ImageSection>
      </CardContainer>

      <Header>
        <h1>GET LEAN</h1>
      </Header>

      <CardContainer>
        <DietList>
          <DietItem>
            <h3>What to Know: Heart Rate for Fat-Burning Vs. Cardio</h3>
            <p>
            If you’re working out for weight loss, you’ll want to work out at a higher intensity. That will help you burn more calories.
            </p>
          </DietItem>
          <DietItem>
            <h3>What Is Metabolic Conditioning?</h3>
            <p>
            Metabolic conditioning, or MetCon, refers to exercises that increase the amount of energy stored and released by the body.
            </p>
          </DietItem>
          <DietItem>
            <h3>What Are Aerobic Exercises?</h3>
            <p>
            Aerobic exercise is cardiovascular exercise, or cardio, that gets your heart pumping.
            </p>
          </DietItem>
          <DietItem>
            <h3>Health Benefits of Running</h3>
            <p>
            Running is one of the best cardio exercises. Running for at least 10 minutes a day can lower cardiovascular disease risk.
            </p>
          </DietItem>
        </DietList>
        <ImageSection>
          <img
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/shutterstock_woman-lifting-dumbbells-arm-curls.jpeg?quality=82&strip=1&w=800"
            alt="Woman in Kitchen Preparing Food"
          />
        </ImageSection>
      </CardContainer>
    </Container>
  );
};

export default Fitness;
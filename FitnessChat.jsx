// import React, { useState } from "react";

// const styles = {
//   chatContainer: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     height: "400px",
//     maxWidth: "500px",
//     margin: "0 auto",
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     padding: "10px",
//     boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
//   },
//   messagesContainer: {
//     flexGrow: 1,
//     overflowY: "auto",
//     marginBottom: "10px"
//   },
//   message: {
//     padding: "10px",
//     borderRadius: "10px",
//     margin: "5px 0",
//     maxWidth: "80%"
//   },
//   inputContainer: {
//     display: "flex"
//   },
//   input: {
//     flexGrow: 1,
//     padding: "10px",
//     borderRadius: "10px",
//     border: "1px solid #ddd",
//     marginRight: "10px"
//   },
//   button: {
//     padding: "10px 20px",
//     borderRadius: "10px",
//     backgroundColor: "#4caf50",
//     color: "#fff",
//     border: "none",
//     cursor: "pointer"
//   }
// };

// const FitnessChat = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! I'm Dr. FitBot. Let's start by knowing your weight. Please enter your weight in kg.", user: "bot" }
//   ]);
//   const [userInput, setUserInput] = useState("");
//   const [step, setStep] = useState(1);
//   const [weight, setWeight] = useState(null);
//   const [height, setHeight] = useState(null);

//   const handleSendMessage = () => {
//     if (userInput.trim() !== "") {
//       const newMessages = [...messages, { text: userInput, user: "user" }];
//       setMessages(newMessages);
//       setUserInput("");

//       if (step === 1) {
//         setWeight(parseFloat(userInput));
//         setTimeout(() => handleBotResponse("weight", userInput), 1000);
//       } else if (step === 2) {
//         setHeight(parseFloat(userInput));
//         setTimeout(() => handleBotResponse("height", userInput), 1000);
//       } else if (step === 3) {
//         setTimeout(() => handleBotResponse("bmi"), 1000);
//       }
//     }
//   };

//   const handleBotResponse = (type, input) => {
//     let response = "I'm not sure how to respond to that. Could you ask something else?";

//     if (type === "weight") {
//       response = Thank you! Now, please enter your height in meters (e.g., 1.75).;
//       setStep(2);
//     } else if (type === "height") {
//       response = "Great! Let me calculate your BMI...";
//       setStep(3);
//     } else if (type === "bmi") {
//       const bmi = calculateBMI(weight, height);
//       response = `Your BMI is ${bmi.toFixed(2)}. ` + getBMIAdvice(bmi);
//       setStep(4);
//     }

//     const newMessages = [...messages, { text: response, user: "bot" }];
//     setMessages(newMessages);
//   };

//   const calculateBMI = (weight, height) => {
//     return weight / (height * height);
//   };

//   const getBMIAdvice = (bmi) => {
//     if (bmi < 18.5) {
//       return "You're underweight. It might be helpful to consult with a healthcare provider or nutritionist.";
//     } else if (bmi >= 18.5 && bmi < 24.9) {
//       return "You have a normal weight. Keep up the good work maintaining your health!";
//     } else if (bmi >= 25 && bmi < 29.9) {
//       return "You're overweight. Consider a balanced diet and regular exercise.";
//     } else {
//       return "You're in the obese range. It's important to speak with a healthcare provider about your health.";
//     }
//   };

//   return (
//     <div style={styles.chatContainer}>
//       <div style={styles.messagesContainer}>
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.message,
//               alignSelf: message.user === "user" ? "flex-end" : "flex-start",
//               backgroundColor: message.user === "user" ? "#4caf50" : "#e0e0e0",
//               color: message.user === "user" ? "#fff" : "#000"
//             }}
//           >
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <div style={styles.inputContainer}>
//         <input
//           type="text"
//           style={styles.input}
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//           placeholder="Type your message..."
//         />
//         <button style={styles.button} onClick={handleSendMessage}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FitnessChat;


import React, { useState } from "react";

const styles = {
  chatContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "600px",
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
  },
  messagesContainer: {
    flexGrow: 1,
    overflowY: "auto",
    marginBottom: "10px"
  },
  message: {
    padding: "10px",
    borderRadius: "10px",
    margin: "5px 0",
    maxWidth: "80%"
  },
  inputContainer: {
    display: "flex"
  },
  input: {
    flexGrow: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    marginRight: "10px"
  },
  button: {
    padding: "10px 20px",
    borderRadius: "10px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  }
};

const FitnessChat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Dr. SSS. Let's start by discussing your fitness routine. How many days a week do you exercise?", user: "bot" }
  ]);
  const [userInput, setUserInput] = useState("");
  const [step, setStep] = useState(1);
  const [exerciseDays, setExerciseDays] = useState(null);
  const [fitnessGoal, setFitnessGoal] = useState("");
  const [dietPreferences, setDietPreferences] = useState("");
  const [exercisePreferences, setExercisePreferences] = useState("");

  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      const newMessages = [...messages, { text: userInput, user: "user" }];
      setMessages(newMessages);
      setUserInput("");

      if (step === 1) {
        setExerciseDays(parseInt(userInput));
        setTimeout(() => handleBotResponse("exerciseDays"), 1000);
      } else if (step === 2) {
        setFitnessGoal(userInput.toLowerCase());
        setTimeout(() => handleBotResponse("fitnessGoal"), 1000);
      } else if (step === 3) {
        setTimeout(() => handleBotResponse("dietPreferences"), 1000);
      } else if (step === 4) {
        setDietPreferences(userInput);
        setTimeout(() => handleBotResponse("exercisePreferences"), 1000);
      } else if (step === 5) {
        setExercisePreferences(userInput);
        setTimeout(() => handleBotResponse("summary"), 1000);
      }
    }
  };

  const handleBotResponse = (type) => {
    let response = "I'm not sure how to respond to that. Could you ask something else?";

    if (type === "exerciseDays") {
      response = `Great! You're exercising ${exerciseDays} days a week. What's your main fitness goal? (e.g., weight loss, muscle gain, endurance)`;
      setStep(2);
    } else if (type === "fitnessGoal") {
      response = `Got it! Now, do you have any specific dietary preferences or restrictions? (e.g., vegetarian, gluten-free)`;
      setStep(3);
    } else if (type === "dietPreferences") {
      response =`Thanks for sharing. Next, what types of exercises do you enjoy or prefer? (e.g., cardio, strength training, yoga)`;
      setStep(4);
    } else if (type === "exercisePreferences") {
      response = `Thanks for letting me know! Based on what you've shared, here’s a summary of your fitness plan:`;
      setStep(5);
    } else if (type === "summary") {
      response = getSummary();
    }

    const newMessages = [...messages, { text: response, user: "bot" }];
    setMessages(newMessages);
  };

  const getDietAdvice = (goal) => {
    switch (goal) {
      case "weight loss":
        return "For weight loss, focus on a diet rich in vegetables, lean proteins, and whole grains. Reduce your intake of processed foods and sugars.";
      case "muscle gain":
        return "To gain muscle, you'll need a diet high in protein with lean meats, eggs, and legumes. Don't forget to include complex carbs for energy.";
      case "endurance":
        return "For endurance, prioritize complex carbs like whole grains and oats. Ensure you're getting enough protein and healthy fats for recovery.";
      default:
        return "Maintaining a balanced diet with a variety of foods is key to overall health.";
    }
  };

  const getExerciseAdvice = (goal) => {
    switch (goal) {
      case "weight loss":
        return "For weight loss, combine cardio exercises like running or cycling with strength training to boost metabolism.";
      case "muscle gain":
        return "To gain muscle, focus on strength training exercises such as weight lifting. Progressive overload is key to building muscle.";
      case "endurance":
        return "For endurance, include long-distance running, cycling, or swimming in your routine. Consistency is key to building stamina.";
      default:
        return "A balanced mix of cardio and strength training is essential for overall fitness.";
    }
  };

  const getSummary = () => {
    const dietAdvice = getDietAdvice(fitnessGoal);
    const exerciseAdvice = getExerciseAdvice(fitnessGoal);
    return `*Fitness Plan Summary:*
- *Exercise Days per Week:* ${exerciseDays}
- *Fitness Goal:* ${fitnessGoal}
- *Diet Preferences:* ${dietPreferences}
- *Exercise Preferences:* ${exercisePreferences}

*Diet Advice:* ${dietAdvice}
*Exercise Tips:* ${exerciseAdvice}`;
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: message.user === "user" ? "flex-end" : "flex-start",
              backgroundColor: message.user === "user" ? "#4caf50" : "#e0e0e0",
              color: message.user === "user" ? "#fff" : "#000"
            }}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          style={styles.input}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Type your message..."
        />
        <button style={styles.button} onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default FitnessChat;
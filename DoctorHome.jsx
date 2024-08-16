// import React, { useState } from "react";
// function Home() {
//   const diseases = [
//     "ADD/ADHD - Childhood",
//     "ADHD",
//     "Allergies",
//     "Alzheimer's",
//     "Ankylosing Spondylitis",
//     "Anxiety Disorders",
//     "Arthritis",
//     "Asthma",
//     "Diabetes",
//     "Hypertension",
//     "Heart Disease",
//     "Stroke",
//     "Cancer",
//     "Obesity",
//     "View all",
//   ];
//   const diseaseDescriptions = {
//     "ADD/ADHD - Childhood":
//       "ADHD stands for attention deficit hyperactivity disorder. It is a medical condition. A person with ADHD has differences in brain development and brain activity that affect attention, the ability to sit still, and self-control. ADHD can affect a child at school, at home, and in friendships.",
//     ADHD: "ADHD stands for attention deficit hyperactivity disorder. It is a medical condition. A person with ADHD has differences in brain development and brain activity that affect attention, the ability to sit still, and self-control. ADHD can affect a child at school, at home, and in friendships.",
//     Allergies:
//       "Allergy occurs when a person immune system reacts to substances in the environment that are harmless to most people. These substances are known as allergens and are found in dust mites, pets, pollen, insects, ticks, moulds, foods, and drugs (medications).",
//     "Alzheimer's":
//       "Alzheimer's disease is a progressive disorder that causes brain cells to degenerate and die, leading to continuous decline in thinking, behavioral and social skills and it mostly occurs in elderly people.",
//     "Ankylosing Spondylitis":
//       "Ankylosing Spondylitis is an inflammatory disease that, over time, can cause some of the vertebrae in the spine to fuse...",
//     "Anxiety Disorders":
//       "Anxiety disorders are a group of mental disorders characterized by significant feelings of anxiety and fear...",
//     Arthritis:
//       "Arthritis is inflammation of the joints that can cause debilitating pain and stiffness...",
//     Asthma:
//       "Asthma is a condition in which your airways narrow and swell and may produce extra mucus, making it difficult to breathe...",
//     Diabetes:
//       "Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high...",
//     Hypertension:
//       "Hypertension, also known as high blood pressure, is a condition in which the force of the blood against the artery walls is too high...",
//     "Heart Disease":
//       "Heart disease describes a range of conditions that affect your heart, including coronary artery disease, arrhythmias, and congenital heart defects...",
//     Stroke:
//       "A stroke occurs when the blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients...",
//     Cancer:
//       "Cancer is a group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body...",
//     Obesity:
//       "Obesity is a complex disease involving an excessive amount of body fat. It increases your risk of other diseases and health problems...",
//     "View all": "Explore all health topics and information on MedScape...",
//   };
//   const featuredStories = [
//     {
//       image:
//         "https://sunrisedentalarizona.com/wp-content/uploads/2021/06/engin-akyurt-NKTJCOHzrUM-unsplash-scaled.jpg",
//       title: "A Step-By-Step Guide To Diagnosis And Management Of Arthritis",
//       description:
//         "In this podcast, rheumatologist Shravan, MD, addresses common forms and symptoms of arthritis, available treatments, and suggested lifestyle modifications to reduce pain.",
//     },
//     {
//       image:
//         "https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/15634/502381/heroimage0.399379001643141256.jpg",
//       title: "Navigating Common GI Symptoms",
//       description:
//         "Gastroenterologist GD Vaasan, MD, discusses how to look at symptoms of gastrointestinal conditions, the relationship between the gut and the brain, and how to improve gut health.",
//     },
//     {
//       image:
//         "https://media.istockphoto.com/id/1357956420/photo/cute-lady-using-cosmetic-product-in-studio.jpg?s=612x612&w=0&k=20&c=Z5YIgH1Wv1zjOrJwjvtnQIGlitN3EGHMuKkiUXZqrUU=",
//       title: "The Ultimate Skin-Care Routine",
//       description:
//         "Your Guide to a Perfect Skin Care Routine for All Skin Types.",
//     },
//   ];
//   const [selectedDisease, setSelectedDisease] = useState("");
//   const handleSelectChange = (event) => {
//     setSelectedDisease(event.target.value);
//   };
//   return (
//     <div style={styles.home}>
//       <main style={styles.homeMain}>
//         <section style={styles.homeSection}>
//           <h2>Featured Stories</h2>
//           <div style={styles.featuredContainer}>
//             {featuredStories.map((story, index) => (
//               <div
//                 key={index}
//                 style={styles.featuredCard}
//                 onMouseOver={(e) =>
//                   (e.currentTarget.style.transform = "scale(1.05)")
//                 }
//                 onMouseOut={(e) =>
//                   (e.currentTarget.style.transform = "scale(1)")
//                 }
//               >
//                 <img
//                   src={story.image}
//                   alt={story.title}
//                   style={styles.featuredImage}
//                 />
//                 <h3 style={styles.featuredTitle}>{story.title}</h3>
//                 <p style={styles.featuredDescription}>{story.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//         <section style={styles.homeSection}>
//           <h2>Latest Topics</h2>
//           <div style={styles.topicContainer}>
//             {[
//               "Diabetes",
//               "Hypertension",
//               "Cardiovascular Disease",
//               "Mental Health",
//               "Nutrition",
//               "Exercise",
//               "Cancer",
//               "Gynaecology",
//               "Post-Partum care",
//             ].map((topic, index) => (
//               <button
//                 key={index}
//                 style={styles.topicButton}
//                 onMouseOver={(e) =>
//                   (e.currentTarget.style.backgroundColor = "#00BFFF")
//                 }
//                 onMouseOut={(e) =>
//                   (e.currentTarget.style.backgroundColor = "#87CEEB")
//                 }
//               >
//                 {topic}
//               </button>
//             ))}
//           </div>
//         </section>
//         <section style={styles.homeSection}>
//           <h2>Health A-Z</h2>
//           <div style={styles.dropdownContainer}>
//             <select onChange={handleSelectChange} style={styles.dropdown}>
//               <option value="">Select a Topic</option>
//               {diseases.map((disease, index) => (
//                 <option key={index} value={disease}>
//                   {disease}
//                 </option>
//               ))}
//             </select>
//             {selectedDisease && (
//               <div
//                 style={styles.descriptionBox}
//                 onMouseOver={(e) =>
//                   (e.currentTarget.style.transform = "scale(1.05)")
//                 }
//                 onMouseOut={(e) =>
//                   (e.currentTarget.style.transform = "scale(1)")
//                 }
//               >
//                 <h3 style={styles.descriptionTitle}>{selectedDisease}</h3>
//                 <p style={styles.descriptionContent}>
//                   {diseaseDescriptions[selectedDisease]}
//                 </p>
//               </div>
//             )}
//           </div>
//           <br></br>
//           <br></br>
//         </section>
//       </main>
//     </div>
//   );
// }
// const styles = {
//   home: {
//     padding: "20px",
//     fontFamily: "Arial, sans-serif",
//   },
//   homeHeader: {
//     backgroundColor: "#0073bb",
//     color: "white",
//     padding: "50px 20px",
//     textAlign: "center",
//     borderRadius: "8px",
//   },
//   homeMain: {
//     margin: "20px",
//   },
//   homeSection: {
//     margin: "20px 0",
//   },
//   featuredContainer: {
//     display: "flex",
//     justifyContent: "space-around",
//     flexWrap: "wrap",
//   },
//   featuredCard: {
//     backgroundColor: "white",
//     border: "1px solid #ddd",
//     borderRadius: "5px",
//     padding: "20px",
//     margin: "10px",
//     width: "300px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//     transition: "transform 0.3s, box-shadow 0.3s",
//   },
//   featuredImage: {
//     width: "100%",
//     height: "auto",
//     borderRadius: "5px",
//   },
//   featuredTitle: {
//     color: "#0073bb",
//     fontSize: "18px",
//     margin: "10px 0",
//   },
//   featuredDescription: {
//     fontSize: "14px",
//     color: "#333",
//   },
//   topicContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "10px",
//     backgroundColor: "#f8f8f8",
//     padding: "20px",
//     borderRadius: "8px",
//   },
//   topicButton: {
//     flex: "1 1 calc(33.333% - 20px)",
//     padding: "10px",
//     backgroundColor: "#87CEEB",
//     color: "white",
//     borderRadius: "5px",
//     textAlign: "center",
//     border: "none",
//     cursor: "pointer",
//     margin: "5px",
//     fontSize: "14px",
//     transition: "background-color 0.2s, transform 0.2s",
//   },
//   dropdownContainer: {
//     backgroundColor: "#e0f0ff",
//     padding: "20px",
//     borderRadius: "8px",
//     textAlign: "center",
//   },
//   dropdown: {
//     padding: "10px",
//     fontSize: "16px",
//     borderRadius: "5px",
//     border: "1px solid #ddd",
//     marginBottom: "20px",
//   },
//   descriptionBox: {
//     backgroundColor: "white",
//     padding: "20px",
//     borderRadius: "5px",
//     boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
//     transition: "transform 0.3s, box-shadow 0.3s",
//     maxHeight: "600px",
//     overflowY: "auto",
//   },
//   descriptionTitle: {
//     color: "#0073bb",
//     fontSize: "18px",
//   },
//   descriptionContent: {
//     fontSize: "14px",
//     color: "#333",
//   },
//   arrow: {
//     marginLeft: "5px",
//     fontSize: "16px",
//   },
// };
// export default Home;
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const diseases = [
    "ADD/ADHD - Childhood",
    "ADHD",
    "Allergies",
    "Alzheimer's",
    "Ankylosing Spondylitis",
    "Anxiety Disorders",
    "Arthritis",
    "Asthma",
    "Diabetes",
    "Hypertension",
    "Heart Disease",
    "Stroke",
    "Cancer",
    "Obesity",
    "View all",
  ];
  const diseaseDescriptions = {
    "ADD/ADHD - Childhood":
      "ADHD stands for attention deficit hyperactivity disorder. It is a medical condition. A person with ADHD has differences in brain development and brain activity that affect attention, the ability to sit still, and self-control. ADHD can affect a child at school, at home, and in friendships.",
    ADHD: "ADHD stands for attention deficit hyperactivity disorder. It is a medical condition. A person with ADHD has differences in brain development and brain activity that affect attention, the ability to sit still, and self-control. ADHD can affect a child at school, at home, and in friendships.",
    Allergies:
      "Allergy occurs when a person immune system reacts to substances in the environment that are harmless to most people. These substances are known as allergens and are found in dust mites, pets, pollen, insects, ticks, moulds, foods, and drugs (medications).",
    "Alzheimer's":
      "Alzheimer's disease is a progressive disorder that causes brain cells to degenerate and die, leading to continuous decline in thinking, behavioral and social skills and it mostly occurs in elderly people.",
    "Ankylosing Spondylitis":
      "Ankylosing Spondylitis is an inflammatory disease that, over time, can cause some of the vertebrae in the spine to fuse...",
    "Anxiety Disorders":
      "Anxiety disorders are a group of mental disorders characterized by significant feelings of anxiety and fear...",
    Arthritis:
      "Arthritis is inflammation of the joints that can cause debilitating pain and stiffness...",
    Asthma:
      "Asthma is a condition in which your airways narrow and swell and may produce extra mucus, making it difficult to breathe...",
    Diabetes:
      "Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high...",
    Hypertension:
      "Hypertension, also known as high blood pressure, is a condition in which the force of the blood against the artery walls is too high...",
    "Heart Disease":
      "Heart disease describes a range of conditions that affect your heart, including coronary artery disease, arrhythmias, and congenital heart defects...",
    Stroke:
      "A stroke occurs when the blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients...",
    Cancer:
      "Cancer is a group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body...",
    Obesity:
      "Obesity is a complex disease involving an excessive amount of body fat. It increases your risk of other diseases and health problems...",
    "View all": "Explore all health topics and information on MedScape...",
  };
  const featuredStories = [
    {
      image:
        "https://sunrisedentalarizona.com/wp-content/uploads/2021/06/engin-akyurt-NKTJCOHzrUM-unsplash-scaled.jpg",
      title: "A Step-By-Step Guide To Diagnosis And Management Of Arthritis",
      description:
        "In this podcast, rheumatologist Shravan, MD, addresses common forms and symptoms of arthritis, available treatments, and suggested lifestyle modifications to reduce pain.",
      link: "/arthritis", // Example link
    },
    {
      image:
        "https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/15634/502381/heroimage0.399379001643141256.jpg",
      title: "Navigating Common GI Symptoms",
      description:
        "Gastroenterologist GD Vaasan, MD, discusses how to look at symptoms of gastrointestinal conditions, the relationship between the gut and the brain, and how to improve gut health.",
      link: "/gi", // Example link
    },
    {
      image:
        "https://media.istockphoto.com/id/1357956420/photo/cute-lady-using-cosmetic-product-in-studio.jpg?s=612x612&w=0&k=20&c=Z5YIgH1Wv1zjOrJwjvtnQIGlitN3EGHMuKkiUXZqrUU=",
      title: "The Ultimate Skin-Care Routine",
      description:
        "Your Guide to a Perfect Skin Care Routine for All Skin Types.",
      link: "/skin", // Example link
    },
  ];
  const [selectedDisease, setSelectedDisease] = useState("");
  const handleSelectChange = (event) => {
    setSelectedDisease(event.target.value);
  };
  return (
    <div style={styles.home}>
      <main style={styles.homeMain}>
        <section style={styles.homeSection}>
          <h2>Featured Stories</h2>
          <div style={styles.featuredContainer}>
            {featuredStories.map((story, index) => (
              <Link to={story.link} key={index} style={styles.featuredLink}>
                <div
                  style={styles.featuredCard}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    style={styles.featuredImage}
                  />
                  <h3 style={styles.featuredTitle}>{story.title}</h3>
                  <p style={styles.featuredDescription}>{story.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section style={styles.homeSection}>
          <h2>Latest Topics</h2>
          <div style={styles.topicContainer}>
            {[
              "Diabetes",
              "Hypertension",
              "Cardiovascular Disease",
              "Mental Health",
              "Nutrition",
              "Exercise",
              "Cancer",
              "Gynaecology",
              "Post-Partum care",
            ].map((topic, index) => (
              <button
                key={index}
                style={styles.topicButton}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#00BFFF")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#87CEEB")
                }
              >
                {topic}
              </button>
            ))}
          </div>
        </section>
        <section style={styles.homeSection}>
          <h2>Health A-Z</h2>
          <div style={styles.dropdownContainer}>
            <select onChange={handleSelectChange} style={styles.dropdown}>
              <option value="">Select a Topic</option>
              {diseases.map((disease, index) => (
                <option key={index} value={disease}>
                  {disease}
                </option>
              ))}
            </select>
            {selectedDisease && (
              <div
                style={styles.descriptionBox}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <h3 style={styles.descriptionTitle}>{selectedDisease}</h3>
                <p style={styles.descriptionContent}>
                  {diseaseDescriptions[selectedDisease]}
                </p>
              </div>
            )}
          </div>
          <br></br>
          <br></br>
        </section>
      </main>
    </div>
  );
}

const styles = {
  home: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  homeMain: {
    margin: "20px",
  },
  homeSection: {
    margin: "20px 0",
  },
  featuredContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  featuredCard: {
    backgroundColor: "white",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "20px",
    margin: "10px",
    width: "300px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  featuredImage: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
  },
  featuredTitle: {
    color: "#0073bb",
    fontSize: "18px",
    margin: "10px 0",
  },
  featuredDescription: {
    fontSize: "14px",
    color: "#333",
  },
  topicContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    backgroundColor: "#f8f8f8",
    padding: "20px",
    borderRadius: "8px",
  },
  topicButton: {
    flex: "1 1 calc(33.333% - 20px)",
    padding: "10px",
    backgroundColor: "#87CEEB",
    color: "white",
    borderRadius: "5px",
    textAlign: "center",
    border: "none",
    cursor: "pointer",
    margin: "5px",
    fontSize: "14px",
    transition: "background-color 0.2s, transform 0.2s",
  },
  dropdownContainer: {
    backgroundColor: "#e0f0ff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  },
  dropdown: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    marginBottom: "20px",
  },
  descriptionBox: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    maxHeight: "600px",
    overflowY: "auto",
  },
  descriptionTitle: {
    color: "#0073bb",
    fontSize: "18px",
  },
  descriptionContent: {
    fontSize: "14px",
    color: "#333",
  },
  featuredLink: {
    textDecoration: "none",
    color: "inherit",
  },
};

export default Home;

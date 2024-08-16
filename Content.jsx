// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import { styled } from "@mui/material/styles";
// import React from "react";
// import image5 from "../pictures/ageing.jpeg";
// import image2 from "../pictures/dietandweight.jpg";
// import image6 from "../pictures/drug.jpeg";
// import image4 from "../pictures/fitness.jpg";
// import image1 from "../pictures/mentalhealth.png";
// import image3 from "../pictures/relationship.avif";
// import HealthyLiving from "./HealthyLiving";
// const ImageCard = styled(Card)(({ theme }) => ({
//   position: "relative",
//   overflow: "hidden",
//   borderRadius: 0,
//   "&:hover": {
//     transform: "scale(1.05)",
//     transition: "transform 0.3s ease-in-out",
//   },
// }));
// const ImageTitle = styled(Typography)(({ theme }) => ({
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   color: "white",
//   fontWeight: "bold",
//   textAlign: "center",
//   padding: theme.spacing(1),
//   fontSize: "1.5rem",
//   zIndex: 1,
//   opacity: 1,
//   textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
//   transition: "color 0.3s ease-in-out",
//   "&:hover": {
//     color: "lightgrey",
//   },
// }));
// const Content = () => {
//   const images = [
//     { src: image2, title: "Diet and Weight" },
//     { src: image3, title: "Sex & Relationship" },
//     { src: image4, title: "Fitness & Exercise" },
//     { src: image5, title: "Healthy Aging" },
//     { src: image1, title: "Mental Health" },
//     { src: image6, title: "Drug Recovery" },
//   ];
//   return (
//     <>
//       <HealthyLiving /> {/* Add the new side topic component here */}
//       <Grid
//         container
//         spacing={2}
//         sx={{
//           padding: 2,
//           overflowX: "auto",
//           flexWrap: "nowrap",
//         }}
//       >
//         {images.map((image, index) => (
//           <Grid item key={index}>
//             <ImageCard sx={{ width: 350, height: 250, position: "relative" }}>
//               <ImageTitle variant="h6">{image.title}</ImageTitle>
//               <CardMedia
//                 sx={{ height: "100%", width: "100%" }}
//                 image={image.src}
//                 title={`Image ${index + 1}`}
//               />
//             </ImageCard>
//           </Grid>
//         ))}
//       </Grid>
//     </>
//   );
// };
// export default Content;
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import image5 from "../pictures/ageing.jpeg";
import image2 from "../pictures/dietandweight.jpg";
import image6 from "../pictures/drug.jpeg";
import image4 from "../pictures/fitness.jpeg";
import image1 from "../pictures/mentalhealth.png";
import image3 from "../pictures/relationship.avif";
import HealthyLiving from "./HealthyLiving";

const ImageCard = styled(Card)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: 0,
  "&:hover": {
    transform: "scale(1.05)",
    transition: "transform 0.3s ease-in-out",
  },
}));

const ImageTitle = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  padding: theme.spacing(1),
  fontSize: "1.5rem",
  zIndex: 1,
  opacity: 1,
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: "lightgrey",
  },
}));

const Content = () => {
  const navigate = useNavigate();
  const images = [
    { src: image2, title: "Diet and Weight", link: "/diet" },
    { src: image3, title: "Sex & Relationship", link: "/sex-and-relationship" },
    { src: image4, title: "Fitness & Exercise", link: "/fitness" },
    { src: image5, title: "Healthy Aging", link: "/healthy-aging" },
    { src: image1, title: "Mental Health", link: "/mental-health" },
    { src: image6, title: "Drug Recovery", link: "/drug" },
  ];

  return (
    <>
      <HealthyLiving /> {/* Add the new side topic component here */}
      <Grid
        container
        spacing={2}
        sx={{
          padding: 2,
          overflowX: "auto",
          flexWrap: "nowrap",
        }}
      >
        {images.map((image, index) => (
          <Grid item key={index}>
            <ImageCard
              sx={{ width: 350, height: 250, position: "relative" }}
              onClick={() => navigate(image.link)}
            >
              <ImageTitle variant="h6">{image.title}</ImageTitle>
              <CardMedia
                sx={{ height: "100%", width: "100%" }}
                image={image.src}
                title={`Image ${index + 1}`}
              />
            </ImageCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Content;

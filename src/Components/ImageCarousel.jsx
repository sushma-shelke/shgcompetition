// import React, { useState, useEffect } from "react";
// import {
//   Grid,
//   Button,
//   Modal,
//   Box,
//   Typography,
//   TextField,
//   IconButton,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import { useMediaQuery } from "@mui/material";
// import img1 from "../Assets/Images/home1.jpg";
// import img2 from "../Assets/Images/home2.jpg";
// import img3 from "../Assets/Images/home3.png";

// import { useCompitationContext } from "../Context/CompitationContext"; // Import context
// import ParticipationForm from "./Form/ParticipationForm"; // Import your ParticipationForm component here

// const images = [img1, img2, img3, img1, img2, img3, img1, img2, img3];
// const intervalTime = 3000; // 3 seconds for autoplay

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [openModal, setOpenModal] = useState(false);
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [errorMessage, setErrorMessage] = useState(""); // State for error message
//   const { isLoggedIn, registerOrLoginUser } = useCompitationContext(); // Use context

//   const isMobile = useMediaQuery("(max-width: 768px)"); // Media query to check if screen width is less than 600px

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, intervalTime);

//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, []);

//   const handleOpenModal = () => {
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setErrorMessage(""); // Clear error message when closing modal
//   };

//   const handleLogin = async () => {
//     if (mobileNumber.length !== 10) {
//       setErrorMessage("Mobile number must be 10 digits long.");
//       return;
//     }

//     const result = await registerOrLoginUser(mobileNumber);
//     if (result) {
//       setOpenModal(false); // Close the modal after successful login
//       setErrorMessage(""); // Clear error message on successful login
//     } else {
//       setErrorMessage("Failed to login/register.");
//     }
//   };

//   return (
//     <>
//       <Grid container spacing={2} justifyContent="center" alignItems="center">
//         <Grid item>
//           <img
//             src={images[currentIndex]}
//             alt={`Carousel ${currentIndex}`}
//             className="carousel-img"
//             style={{ width: "100%" }}
//           />
//         </Grid>
//       </Grid>
//       <div className="bullets">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`bullet ${currentIndex === index ? "active" : ""}`}
//             onClick={() => setCurrentIndex(index)}
//           ></div>
//         ))}
//       </div>
//       {isLoggedIn ? (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleOpenModal}
//           style={{
//             position: "relative",
//             top: isMobile ? "-35px" : "-55px",
//             width: isMobile ? "55%" : "20%",
//             backgroundColor: "#9C2946",
//             fontWeight: "600",
//             textTransform: "capitalize",
//             borderRadius: "50px",
//             padding: isMobile ? "20px" : "30px",
//             fontSize: "16px",
//             boxShadow: "4px 6px 10px 0px grey",
//           }}
//         >
//           {isMobile ? "Participate" : "Click to Participate"}
//         </Button>
//       ) : (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleOpenModal}
//           style={{
//             position: "relative",
//             top: "-55px",
//             width: isMobile ? "55%" : "20%",
//             backgroundColor: "#9C2946",
//             fontWeight: "600",
//             textTransform: "capitalize",
//             borderRadius: "50px",
//             padding: "30px",
//             fontSize: "16px",
//             boxShadow: "4px 6px 10px 0px grey",
//           }}
//         >
//           Login to Participate
//         </Button>
//       )}

//       {/* Modal for Login or ParticipationForm */}
//       <Modal
//         open={openModal}
//         onClose={handleCloseModal}
//         aria-labelledby="login-modal-title"
//         aria-describedby="login-modal-description"
//         disableScrollLock // Allow background scrolling
//       >
//         <Box
//           xs={12}
//           md={6}
//           lg={4}
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: isMobile ? "100%" : isLoggedIn ? "90%" : "20%", // Conditional width based on screen size and login status
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             borderRadius: 3,
//             p: 4,
//             maxHeight: "90vh",
//             overflowY: "auto",
//           }}
//         >
//           <IconButton
//             onClick={handleCloseModal}
//             sx={{
//               position: "absolute",
//               right: 8,
//               top: 8,
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//           <Typography
//             id="login-modal-title"
//             variant="h6"
//             component="h2"
//             sx={{
//               my: 2,
//               color: "#9C2946",
//               display: "block",
//               fontWeight: "700",
//               textTransform: "capitalize",
//               fontSize: "20px",
//             }}
//           >
//             {isLoggedIn ? "" : "Login"}
//           </Typography>
//           {isLoggedIn ? (
//             <ParticipationForm />
//           ) : (
//             <>
//               <TextField
//                 id="mobile"
//                 label="Mobile Number"
//                 type="number"
//                 value={mobileNumber}
//                 onChange={(e) => setMobileNumber(e.target.value)}
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 error={!!errorMessage}
//                 helperText={errorMessage} 
//               />
//               <Box
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleLogin}
//                   style={{
//                     position: "relative",
//                     width: "25%",
//                     backgroundColor: "#9C2946",
//                     fontWeight: "600",
//                     textTransform: "capitalize",
//                     borderRadius: "50px",
//                     padding: "20px",
//                     fontSize: "16px",
//                     boxShadow: "4px 6px 10px 0px grey",
//                   }}
//                 >
//                   Login
//                 </Button>
//               </Box>
//             </>
//           )}
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default ImageCarousel;





import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import img1 from "../Assets/Images/home1.jpg";
import img2 from "../Assets/Images/home2.jpg";
import img3 from "../Assets/Images/home3.png";

import { useCompitationContext } from "../Context/CompitationContext"; // Ensure this context is correctly set up
import ParticipationForm from "./Form/ParticipationForm"; // Ensure this component is correctly imported

const images = [img1, img2, img3, img1, img2, img3, img1, img2, img3];
const intervalTime = 3000; // 3 seconds for autoplay

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { isLoggedIn, registerOrLoginUser } = useCompitationContext();

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setErrorMessage("");
  };

  const handleLogin = async () => {
    if (mobileNumber.length !== 10) {
      setErrorMessage("Mobile number must be 10 digits long.");
      return;
    }

    const result = await registerOrLoginUser(mobileNumber);
    if (result) {
      setOpenModal(false);
      setErrorMessage("");
    } else {
      setErrorMessage("Failed to login/register.");
    }
  };

  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <img
            src={images[currentIndex]}
            alt={`Carousel ${currentIndex}`}
            className="carousel-img"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
      <div className="bullets">
        {images.map((_, index) => (
          <div
            key={index}
            className={`bullet ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
      {isLoggedIn ? (
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenModal}
          style={{
            position: "relative",
            top: isMobile ? "-35px" : "-55px",
            width: isMobile ? "55%" : "20%",
            backgroundColor: "#9C2946",
            fontWeight: "600",
            textTransform: "capitalize",
            borderRadius: "50px",
            padding: isMobile ? "20px" : "30px",
            fontSize: "16px",
            boxShadow: "4px 6px 10px 0px grey",
          }}
        >
          {isMobile ? "Participate" : "Click to Participate"}
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenModal}
          style={{
            position: "relative",
            top: "-55px",
            width: isMobile ? "55%" : "20%",
            backgroundColor: "#9C2946",
            fontWeight: "600",
            textTransform: "capitalize",
            borderRadius: "50px",
            padding: "30px",
            fontSize: "16px",
            boxShadow: "4px 6px 10px 0px grey",
          }}
        >
          Login to Participate
        </Button>
      )}

      {/* Modal for Login or ParticipationForm */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
        disableScrollLock
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "100%" : isLoggedIn ? "90%" : "20%",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 3,
            p: 4,
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            id="login-modal-title"
            variant="h6"
            component="h2"
            sx={{
              my: 2,
              color: "#9C2946",
              display: "block",
              fontWeight: "700",
              textTransform: "capitalize",
              fontSize: "20px",
            }}
          >
            {isLoggedIn ? "" : "Login"}
          </Typography>
          {isLoggedIn ? (
            <ParticipationForm />
          ) : (
            <>
              <TextField
                id="mobile"
                label="Mobile Number"
                type="number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errorMessage}
                helperText={errorMessage}
              />
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                  style={{
                    position: "relative",
                    width: "25%",
                    backgroundColor: "#9C2946",
                    fontWeight: "600",
                    textTransform: "capitalize",
                    borderRadius: "50px",
                    padding: "20px",
                    fontSize: "16px",
                    boxShadow: "4px 6px 10px 0px grey",
                  }}
                >
                  Login
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default ImageCarousel;


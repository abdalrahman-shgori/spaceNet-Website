import React from 'react';
import { Box, Typography, Grid, CardMedia } from '@mui/material';
import techImg from "../../../assets/sectionsImages/technologiesImage.svg"
const OurTechnologies = () => {
  return (
    <>
    <Grid container sx={{position:"relative"}}>
      <Grid lg={11}>
      <Box
        sx={{
          background: "#9D89FC",
          maxWidth: "80%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          borderTopRightRadius: "15px",
          borderTopLeftRadius: "15px",
          borderBottomLeftRadius:"15px",
          paddingBottom: "16px", // Added padding to create space between the lines
        }}
      >
        <Typography
          sx={{
            fontSize: "60px",
            fontFamily: "var(--English-StintUltraCondensed)",
          }}
        >
          Our team makes use of the newest
        </Typography>
      </Box>

      {/* Grid for the second and third text */}
      <Grid container justifyContent="flex-end" sx={{ maxWidth: "80%", marginTop: "-16px" }}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography
              sx={{
                fontSize: "60px",
                fontFamily: "var(--English-StintUltraCondensed)",
                background: "#9D89FC",
                borderBottomLeftRadius:"15px",


              }}
            >
              technology and finest
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box 
          sx={{
            background: "#9D89FC",
            width: "800px",
            display: "flex",
            justifyContent: "flex-end", // Align content to the right
            alignItems: "center", // Center vertically if necessary
            marginLeft: "auto", // Push the Box to the right within the flex container
            borderTopRightRadius: "15px",
                borderBottomLeftRadius:"15px", 
                borderBottomRightRadius:"15px", 

        }}
          >
            <Typography
              sx={{
                fontSize: "60px",
                fontFamily: "var(--English-StintUltraCondensed)",
              
              }}
            >
              development processes.
            </Typography>
          </Box>
      </Grid>
      <Grid lg={1}>
      <CardMedia
        component="img"
        image={techImg} // Replace with your image URL
        alt="Team Working"
        sx={{
          height: '150px',
          width: '150px',
          borderRadius: '10px',
       
        }}
      />
        </Grid>
    </Grid>
 
    </>
  );
};

export default OurTechnologies;

import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import arrow from "../assets/sectionsImages/footerArrow.svg";

const Footer = () => {
  const footerSections = [
    {
      title: 'Reach Us',
      content: [
        { name: '+964 (0) 750 555 0558', img: '' },
        { name: 'www.spacenetiq.com', img: arrow },
        { name: 'Empire business towers Building T4, floor 13, office 3.', }

      ],
    },
    {
      title: 'Social Media',
      content: [
        { name: 'Instagram', link: 'https://facebook.com' },
        { name: 'Whatsapp', link: 'https://twitter.com' },
        { name: 'Facebook', link: 'https://linkedin.com' },
        { name: 'Dribble', link: 'https://instagram.com' },
        { name: 'Linkedln', link: 'https://Linkedln.com' },
        { name: 'Behance', link: 'https://Behance.com' },

      ],
    },
    {
      title: 'Legal',
      content: [
        { name: 'Privacy', img: arrow },
        { name: `Terms `, img: arrow },
      ],
    },
  ];

  return (
    <Box sx={{}} className="root-container">
      <Grid container
        sx={{
          background: "#F4F4F4",
          padding: {
            lg: '66px 190px 47px 190px',
            md: "90px 100px 47px 100px",
            sm: '66px 25px 47px 25px',
            xs: '45px 25px 45px 25px'
          }
        }}
      >
        {footerSections.map((section, index) => (
          <Grid key={index} item
            lg={index === 2 ? 2 : 5}
            md={index === 2 ? 2 : 5}
            sm={index === 2 ? 2 : 5}
            xs={12}
          >
            <Typography
              sx={{
                fontSize: "25px",
                fontFamily: "var(--English-font-semibold)",
                marginTop: {
                  lg: "unset",
                  md: "unset",
                  sm: "unset",
                  xs: index > 0 ? "28px" : "0px"
                },
                color: "#222222",


              }}
            >
              {section.title}
            </Typography>

            {section.title === 'Social Media' ? (
              <Grid container >
                {section.content.map((social, idx) => (
                  <Grid
                    key={idx}
                    item lg={4.1} md={5.5} sm={12} xs={6}
                    sx={{
                      marginTop: idx > 1 ? "11px" : "18px",
                      display: "flex"
                    }}
                  >
                    <Link
                      href={social.link}
                      target="_blank"
                      rel="noopener"
                      underline="none"
                      sx={{
                        fontSize: "16px",
                        fontFamily: "var(--English-font)",
                        color: "#222222",
                        display: "flex",
                        alignItems: "center",
                        width: "90px"
                      }}
                    >
                      {social.name}

                    </Link>
                    <img
                      src={arrow}
                      alt="arrow"
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (

              section.content.map((text, idx) => (
                <Grid
                  key={idx}
                  item
                  lg={index === 0 && idx === 1 ? 5.5 : 6}
                  md={index === 0 && idx === 1 ? 8.5 : index === 2 ? 9 : 12}
                  sm={index === 0 && idx === 1 ? 8.5 : index === 2 ? 9 : 12}
                  xs={index === 0 && idx === 1 ? 9 : index === 2 ? 3.45 : 12}
                  sx={{
                    marginTop: idx > 1 ? "11px" : "18px",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <Typography
                    key={idx}
                    sx={{
                      fontSize: "16px",
                      fontFamily: "var(--English-font)",
                      color: "#222222",
                      width: {
                        lg: index !== 1 && idx !== 2 ? "190px" : "240px",
                        md: index !== 1 && idx !== 2 ? "190px" : "240px",
                        sm: "210px",
                        xs: index !== 1 && idx !== 2 ? "190px" : "240px"
                      },
                    }}
                  >
                    {text.name}

                  </Typography>
                  {text.img && (
                    <img
                      src={text.img}
                      style={{
                      }}
                    />
                  )}
                </Grid>


              ))
            )}
          </Grid>
        ))}

      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "#FFFFFF",
          padding: {
            lg: '7.5px 290px 7.5px 190px',
            md: "7.5px 160px 7.5px 100px",
            sm: '7.5px 25px 7.5px 25px',
            xs: '7.5px 25px 7.5px 25px'
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: "14px",
              md: "14px",
              sm: "12px",
              xs: "12px"
            },
            fontFamily: "var(--English-font)",
            color: "#222222",

          }}
        >
          Copyright @2024
        </Typography>
        <Typography
          sx={{
            fontSize: {
              lg: "14px",
              md: "14px",
              sm: "12px",
              xs: "12px"
            },
            fontFamily: "var(--English-font)",
            color: "#222222",

          }}
        >
          Developed By: SpaceNetiq.com
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

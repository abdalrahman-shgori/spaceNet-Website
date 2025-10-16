import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import arrow from "../assets/sectionsImages/footerArrow.svg";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const footerSections = [
    {
      title: t("Footer.ReachUs"),
      content: [
        { name: '+964 (0) 750 555 0558', img: '' ,url: 'https://wa.me/9647505550558'},
        { name: 'www.spacecraftiq.com', img: arrow,url: 'https://www.spacecraftiq.com' },
        { name: t("Footer.tower"),url: 'https://www.spacecraftiq.com' }

      ],
    },
    {
      title: t("Footer.SocialMedia"),
      content: [
        { name: t("Footer.Instagram"), link: 'https://www.instagram.com/spacecraft.iq/?igsh=MTczbGI1anM3NjdmbA%3D%3D#' },
        { name: t("Footer.Whatsapp"), link: 'https://wa.me/9647505550558' },
        { name: t("Footer.Facebook"), link: 'https://www.facebook.com/share/19yTYEYifS/?mibextid=wwXIfr' },
        { name: t("Footer.Linkedln"), link: 'https://www.linkedin.com/company/spacecraftiq' },
        { name: t("Footer.Pinterest"), link: 'https://www.pinterest.com/spacecraftiq/' },
      ],
    },
    {
      title: t("Footer.legal"),
      content: [
        { name: t("Footer.Privacy"), img: arrow, link: '/privacy' },
        { name: t("Footer.terms"), img: arrow, link: '/terms' },
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
                fontFamily: "var(--English-font)",
                fontWeight: "600",
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

            {section.title === t("Footer.SocialMedia") ? (
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
                      to={social.link}
                      target="_blank"
                      rel="noopener"
                      underline="none"
                      style={{
                        fontSize: "16px",
                        fontFamily: "var(--English-font), Arial, sans-serif",
                        color: "#222222",
                        display: "flex",
                        alignItems: "center",
                        width: dir === 'rtl' ? "60px" : "90px",
                      }}
                    >
                      {social.name}
                    </Link>
                    <img
                      loading='lazy'
                      src={arrow}
                      alt="arrow"
                      style={{ transform: dir === 'rtl' ? "scaleX(-1)" : "unset" }}
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
                  {text.link ? (
                    <Link
                      to={text.link}
                    >
                      <Typography
                      underline="none"

                        sx={{
                          fontSize: "16px",
                          fontFamily: "var(--English-font), Arial, sans-serif",
                          color: "#222222",
                          width: {
                            lg: index !== 1 && idx !== 2 ? "75px" : "240px",
                            md: index !== 1 && idx !== 2 ? "75px" : "240px",
                            sm: "210px",
                            xs: index !== 1 && idx !== 2 ? "75px" : "240px"
                          },
                          direction: dir === 'rtl' && index === 0 && idx === 0 && 'ltr',
                          textAlign: dir === 'rtl' && "right"
                        }}
                      >
                      {text.name}
                        
                      </Typography>
                    </Link>
                  ) : (
                    <Link
                    to={text.url}
                    target="_blank"
                    rel="noopener"
                    underline="none"
                    >
                    <Typography
                      key={idx}
                      sx={{
                        fontSize: "16px",
                        fontFamily: "var(--English-font), Arial, sans-serif",
                        color: "#222222",
                        width: {
                          lg: index !== 1 && idx !== 2 ? "200px" : "240px",
                          md: index !== 1 && idx !== 2 ? "200px" : "240px",
                          sm: "210px",
                          xs: index !== 1 && idx !== 2 ? "200px" : "240px"
                        },
                        direction: dir === 'rtl' && index === 0 && idx === 0 && 'ltr',
                        textAlign: dir === 'rtl' && "right"

                      }}
                    >
                      {text.name}

                    </Typography>
                    </Link>

                  )}
                  {text.img && (
                    <img
                      loading='lazy'
                      src={text.img}
                      alt='arrow'
                      style={{ transform: dir === 'rtl' ? "scaleX(-1)" : "unset" }}
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
          padding: dir === 'ltr' ? {
            lg: '7.5px 290px 7.5px 190px',
            md: "7.5px 160px 7.5px 100px",
            sm: '7.5px 25px 7.5px 25px',
            xs: '7.5px 25px 7.5px 25px'
          } :
            {
              lg: '7.5px 190px 7.5px 290px',
              md: "7.5px 100px 7.5px 160px",
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
            fontFamily: "var(--English-font), Arial, sans-serif",
            color: "#222222",

          }}
        >
          {t("Footer.Copyright")}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              lg: "14px",
              md: "14px",
              sm: "12px",
              xs: "12px"
            },
            fontFamily: "var(--English-font), Arial, sans-serif",
            color: "#222222",
          }}
        >
          {t("Footer.developedBy")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

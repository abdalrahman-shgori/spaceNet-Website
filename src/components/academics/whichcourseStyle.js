

export const pageStyle = (test) => ({
  position: "relative",
  cursor: "pointer",
  padding: {
    lg: "82px 56px 48px 56px",
    md: "82px 20px 48px 20px",
    sm: "82px 20px 25px 20px",
    xs: test ? "70px 20px 20px 20px" : "70px 20px 116px 20px"
  },

  gap: {
    lg: "214px",
    md: "214px",
    sm: "19px",
    xs: "193px"
  },
  marginTop: {
    lg: "100px",
    md: "100px",
    sm: "70px",
    xs: "70px"
  },
  maxWidth: "1440px",
  margin: "0 auto",
})


export const textStyle = (test) => ({
  fontSize: {
    lg: "62px",
    md: "62px",
    sm: "30px",
    xs: "30px"
  },
  color: "#FFFFFF",

  width: "100%",

  lineHeight: {
    lg: "75px",
    md: "75px",
    sm: "35px",
    xs: "35px"
  },
  fontFamily: "var(--English-font-semibold)"

})

export const bracketStyle = (test, index) => ({
  position: "absolute",
  top: {
    xl: test ? 20 : 30,
    lg: test ? 15 : 30,
    md: test ? 15 : 10,
    sm: test ? 15 : 10,
    xs: 0
  },

  scale: {
    xl: test ? "1" : "1",
    lg: test ? "0.9" : "1",
    md: test ? "0.8" : "0.8",
    sm: test ? "0.8" : "0.8",
    xs: "0.6"
  },


})

export const cardTitle = (test, index) => ({
  fontSize: {
    xl: test ? "31px" : "30px",
    lg: test ? "23.32px" : "30px",
    md: test ? "23.32px" : "24px",
    sm: test ? "20px" : "24px",
    xs: test ? "14.63px" : "16px"
  },
  padding: {
    lg: test ? "0px 28px 0px 28px" : "0px 32px 0px 32px",
    md: "0px 37px 0px 37px",
    sm: "0px 37px 0px 37px",
    xs: "0px 22px 0px 22px"
  },
  fontFamily: "var(--English-font)",
  color: index === 2 ? "#FA6423" : index === 3 ? "#FA6423" : "#FFFFFF",
  position: "relative",
  top: {
    xl: test ? "-40px" : "-20px",

    lg: test ? "0px" : "-20px",
    md: test ? "0px" : "unset",
    sm: test ? "0px" : "unset",
    xs: test ? "20px" : "10px"
  },
  lineHeight: {
    xl: test ? "45px" : "44px",
    lg: test ? "34px" : "44px",
    md: test ? "34px" : "34px",
    sm: test ? "29px" : "34px",
    xs: test ? "21px" : "24px"
  },
  minHeight: "140px",
  maxHeight: "140px"
})

export const cardStyle = (
  test,
  is15Inch,
  is14Inch,
  item,
  lg,
  md,
  sm,
  xs
) => ({
  background: item.bg,
  maxWidth:
    lg ? is14Inch ? "340px" : is15Inch ? "350px" : test ? "301px" : "384px" :
      md ? "280px" :
        sm ? test ? "280px" : "280px" :
          xs ? test ? "216px" : "216px" :
            "384px",
  minWidth:
    lg ? is14Inch ? "340px" : is15Inch ? "350px" : test ? "301px" : "384px" :
      md ? "280px" :
        sm ? test ? "280px" : "280px" :
          xs ? test ? "216px" : "216px" :
            "384px",
  width: "100%",
  maxHeight:
    lg ? is14Inch ? "340px" : is15Inch ? "350px" : test ? "305px" : "384px" :
      md ? "300px" :
        sm ? "300px" :
          xs ? test ? "220px" : "220px" :
            "384px",
  minHeight: test && lg ? is14Inch ? "340px" : is15Inch ? "350px" : test ? "305px" : "384px" :
    md ? "300px" :
      sm ? test ? "300px" : "300px" :
        xs ? test ? "220px" : "220px" :
          "384px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "19px",
  transform: `rotate(${item.rotate})`,
})

export const cardStyle2 = (test, index) => ({
  position: test ? "relative" : "absolute",
  zIndex: 2,
  justifyContent: test ?
    {
      lg: index === 0 ? "end" : index === 1 ? "start" : index === 2 ? "end" : index === 3 ? "center" : index === 4 ? 'start' : '',
      md: index === 0 ? "end" : index === 1 ? "start" : index === 2 ? "end" : index === 3 ? "center" : index === 4 ? 'start' : '',
      sm: index === 0 ? "end" : index === 1 ? "start" : "center",
      xs: index % 2 === 0 ? "end" : "start",
    } : undefined,
  display: "flex",
  paddingRight: {
    lg: test ? index === 0 && "67px" : undefined,
    md: test ? index === 0 ? "67px" : undefined : undefined,
    sm: test ? index >= 0 ? "20px" : "20px" : "20px",
    xs: test ? "35px" : 'unset'
  },
  paddingLeft:
  {
    lg: "unset",
    md: "unset",
    sm: "unset",
    xs: test ? "35px" : 'unset'
  },
  marginRight: !test ?
    {
      lg: index === 3 ? "50px" :
        index === 2 ? "90px" :
          index === 1 ? "130px" :
            index === 0 ? "180px" : undefined,
      //MD
      md: index === 3 ? "40px" :
        index === 2 ? "65px" :
          index === 1 ? "95px" :
            index === 0 ? "140px" : undefined,
      //SM
      sm: index === 3 ? "40px" :
        index === 2 ? "65px" :
          index === 1 ? "95px" :
            index === 0 ? "140px" : undefined,
      //XS
      xs:
        index === 3 ? "10px" :
          index === 2 ? "20px" :
            index === 1 ? "35px" :
              index === 0 ? "50px" : "",
    } : 'unset',

  marginTop: test ? {
    lg: index > 1 ? "-100px" : undefined,
    md: index > 1 ? "-100px" : undefined,
    sm: index > 1 ? "-100px" : undefined,
    xs: index > 0 ? "-60px" : undefined
  } : {
    lg: index === 3 ? "-50px" :
      index === 2 ? "-70px" :
        index === 1 ? '-90px' :
          index === 0 ? "-106px" : undefined,

    //MD
    md: index === 3 ? "-30px" :
      index === 2 ? "-50px" :
        index === 1 ? '-60px' :
          index === 0 ? "-75px" : undefined,
    //SM
    sm: index === 3 ? "-30px" :
      index === 2 ? "-50px" :
        index === 1 ? '-60px' :
          index === 0 ? "-75px" : undefined,
    //XS
    xs: index === 3 ? "-25px" :
      index === 2 ? "-34px" :
        index === 1 ? '-45px' :
          index === 0 ? "-55px" : undefined,
  },

  marginLeft: !test ? {
    lg: "120px",
    md: "120px",
    sm: "120px",
    xs: "unset"
  } : undefined,
  transition: "justifyContent 10s"
})

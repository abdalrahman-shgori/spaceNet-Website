export const textFieldStyle = (theme) => ({
    mt: {
        lg: "6px",
        md: "6px",
        sm: "6px",
        xs: "4px"
    },
    mb: {
        lg: "13px",
        md: "13px",
        sm: "13px",
        xs: "15px"
    },
    background: "transparent",
    border: `1px solid ${theme.palette.mode === "dark" ? "#FFFFFF" : "#051A2F"}`,
    borderRadius: "85px",
    '& .MuiOutlinedInput-root': {
        borderRadius: '85px',
        '& fieldset': {
            border: 'none',
            background: 'transparent',

        },
        '&:hover fieldset': {
            border: 'none',
            background: 'transparent',
        },
        '&.Mui-focused fieldset': {
            border: 'none',
            background: 'transparent',
        },
        '& .MuiInputBase-input::placeholder': {
            color: theme.palette.mode === 'dark' ? "#FFFFFF" : '#29547E',
            fontFamily: "var(--English-font), Arial, sans-serif",
            background: 'transparent',
        },
        '& .MuiInputBase-input': {
            color: theme.palette.mode === "dark" ? "#FFFFFF" : '#29547E',
            fontSize: {
                lg: "15px",
                md: "15px",
                sm: "15px",
                xs: "11px"
            },
            background: 'transparent',
            fontFamily: "var(--English-font), Arial, sans-serif"
        },
        height: {
            lg: "58px",
            md: "58px",
            sm: "58px",
            xs: "40px"
        },
        '& input:-webkit-autofill': {
            boxShadow: '0 0 0 10px transparent inset',
      WebkitBoxShadow: '0 0 0 10px transparent inset',
            transition: 'background-color 5000s ease-in-out 0s',
            WebkitTextFillColor: '#29547E !important',

          }
    },
});


export const fieldTextStyle = (theme) => ({
    fontSize: {
        lg: "15px",
        md: "15px",
        sm: "15px",
        xs: "10.46px"
    },
    fontFamily: "var(--English-font)",
    fontWeight: "600",
    lineHeight: {
        lg: "21px",
        md: "21px",
        sm: "21px",
        xs: "14px"
    },
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",

})

export const radioStyle = (theme) => ({
    mt: {
        lg: "6px",
        md: "6px",
        sm: "6px",
        xs: "4px"
    },

    margin: "0 0px",

    '& .MuiRadio-root': {
        color: theme.palette.mode === "dark" ? "#FFFFFF" : '#29547E',
        width: {
            lg: "30px",
            md: "30px",
            sm: "30px",
            xs: "10px"
        },


        '&.Mui-checked': {
            color: theme.palette.mode === "dark" ? "#FFFFFF" : '#051A2F',
        },
    },
    '& .MuiFormControlLabel-label': {
        color: theme.palette.mode === "dark" ? "#FFFFFF" : '#29547E',
        fontSize: {
            lg: "15px",
            md: "14px",
            sm: "14px",
            xs: "10px"
        },
        fontFamily: "var(--English-font), Arial, sans-serif",

        '& .MuiSvgIcon-root': {
            width: 40,
            height: 40,
        },

    },

    border: theme.palette.mode === "dark" ? "1px solid #FFFFFF" : "1px solid #051A2F",
    borderRadius: "85px",
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    padding: {
        lg: "10px 14px 10px 8px",
        md: "10px 20px 10px 8px",
        sm: "10px 20px 10px 8px",
        xs: "0px 10px 0px 8px"
    },
    height: {
        lg: "58px",
        md: "58px",
        sm: "58px",
        xs: "40px"
    },
    width: "fit-content",
    display: "inline-flex",
})

export const unifiedInputStyle = (theme) => ({
    mt: {
        lg: "6px",
        md: "6px",
        sm: "6px",
        xs: "4px"
    },
    mb: {
        lg: "13px",
        md: "13px",
        sm: "13px",
        xs: "15px"
    },
    display: 'flex',
    alignItems: 'center',
    border: theme.palette.mode === "dark" ? "1px solid #FFFFFF" : '1px solid #051A2F',
    borderRadius: '85px',
    padding: '5px',
    width: '100%',
    height: {
        lg: "58px",
        md: "58px",
        sm: "58px",
        xs: "40px"
    },
    background: "transparent",

})

export const inputFieldStyle = (theme) => ({
    flexGrow: 1,
    border: 'none',
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#29547E",
    textDecoration: "underline",
    paddingLeft: "20px",
    fontSize: {
        lg: "15px",
        md: "15px",
        sm: "15px",
        xs: "11px"
    },
    '& input:-webkit-autofill': {
        boxShadow: '0 0 0 10px transparent inset',
  WebkitBoxShadow: '0 0 0 10px transparent inset',
        transition: 'background-color 5000s ease-in-out 0s',
        WebkitTextFillColor: '#29547E !important',

      }
})
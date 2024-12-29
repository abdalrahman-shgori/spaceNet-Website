import React from "react";
import { FormControl, Grid, TextField, Box, Typography } from '@mui/material';
import {
    textFieldStyle,
    fieldTextStyle,
    unifiedInputStyle,
    inputFieldStyle
} from '../formstyle';
import { MenuItem, Select, InputBase, InputAdornment } from '@mui/material';
import { useTranslation } from "react-i18next";

export default function FirstFormSection({
    theme,
    countryCode,
    setCountryCode,
    countries,
    phoneNumber,
    handlePhoneChange,
    selectedGender,
    handleChange,
    formData,
    handleGenderChange
}) {
    const { t, i18n } = useTranslation()
    const dir = i18n.dir()
    return (
        <>
            <Grid item lg={6} md={6} sm={12} xs={12}
                sx={{
                    paddingRight: dir === 'ltr' && {
                        lg: "50px",
                        md: "20px",
                        sm: "unset",
                        xs: "unset"
                    },
                    paddingLeft: dir === 'rtl' && {
                        lg: "50px",
                        md: "20px",
                        sm: "unset",
                        xs: "unset"
                    },
                }}
            >
                <Box sx={{
                    padding:
                    {
                        lg: "unset",
                        md: "unset",
                        sm: "0px 45px 0px 45px",
                        xs: "0px 45px 0px 45px"
                    }
                }}>
                    <Box>
                        <Typography sx={{ ...fieldTextStyle(theme) }}>
                            {t("formAcademics.Name")}
                        </Typography>
                        <TextField
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            required
                            placeholder={t("formAcademics.YourName")}
                            sx={{
                                ...textFieldStyle(theme)
                            }}
                        />
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                gap: {
                                    lg: "4px",
                                    md: "4px",
                                    sm: "4px",
                                    xs: "2p"
                                }
                            }}
                        >
                            <Typography sx={{ ...fieldTextStyle(theme) }}>
                                {t("formAcademics.Email")}
                            </Typography>
                            <Typography
                                component="span"
                                sx={{
                                    color: "#2A547E",
                                    fontSize: {
                                        lg: "12.7px",
                                        md: "12.7px",
                                        sm: "12.7px",
                                        xs: "8.3px"
                                    },
                                }}
                            >
                                ({t("formAcademics.Optional")})
                            </Typography>
                        </Box>

                        <TextField
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            placeholder={t("formAcademics.YourEmail")}
                            sx={{
                                ...textFieldStyle(theme)
                            }}
                        />
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Typography sx={{ ...fieldTextStyle(theme) }}> {t("formAcademics.PhoneNumber")} </Typography>

                        <Box sx={unifiedInputStyle(theme)}>
                            <Select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                variant="standard"
                                disableUnderline
                                sx={
                                    {
                                        paddingLeft: dir === 'ltr' && {
                                            lg: "12px",
                                            md: "12px",
                                            sm: "12px",
                                            xs: "8px"
                                        },
                                        paddingRight: dir === 'rtl' && {
                                            lg: "12px",
                                            md: "12px",
                                            sm: "12px",
                                            xs: "8px"
                                        },
                                        color: theme.palette.mode === "dark" ? "#FFFFFF" : "#29547E",
                                        textDecoration: "underline",
                                        '& .MuiSelect-select': {
                                            paddingRight: dir === 'ltr' && "4px !important",
                                            paddingLeft: dir === 'rtl' && "4px !important",
                                            fontSize: {
                                                lg: "15px",
                                                md: "15px",
                                                sm: "15px",
                                                xs: "11px"
                                            }
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            padding: "0",
                                            fontSize: {
                                                lg: "15px",
                                                md: "15px",
                                                sm: "15px",
                                                xs: "11px"
                                            },
                                        },
                                        '& .MuiSelect-icon': {
                                            fontSize: {
                                                lg: "50px",
                                                md: "50px",
                                                sm: "50px",
                                                xs: "30px"
                                            },
                                            color: theme.palette.mode === "dark" ? "#FFFFFF" : "#051A2F",
                                            padding: "0 !important",
                                            marginRight: dir === 'ltr' ? {
                                                lg: "-36px",
                                                md: "-36px",
                                                sm: "-36px",
                                                xs: "-26px"
                                            } :
                                                {
                                                    lg: "-6px",
                                                    md: "-6px",
                                                    sm: "-6px",
                                                    xs: "-6px"
                                                }
                                            ,

                                            marginTop: {
                                                lg: "-2px",
                                                md: "-2px",
                                                sm: "-2px",
                                                xs: "1px"
                                            }

                                        },
                                        '& .MuiSelect-input': {
                                            fontSize: "50px",
                                            color: theme.palette.mode === "dark" ? "#FFFFFF" : "#051A2F",
                                            padding: "0 !important",
                                            marginRight: dir === 'ltr' && "-36px",
                                            marginLeft: dir === 'rtl' && "-36px",
                                        },
                                    }
                                }
                            >
                                {countries.map((country) => (

                                    <MenuItem key={country.code} value={country.callingCode}>
                                        {country.callingCode} {country.name}
                                    </MenuItem>
                                ))}
                            </Select>

                            <InputBase
                                placeholder={t("formAcademics.YourPhoneNumber")}
                                type="number"
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                name="phone"
                                fullWidth
                                sx={{
                                    ...inputFieldStyle(theme),
                                    '& input[type=number]': {
                                        MozAppearance: 'textfield',
                                    },
                                    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                                        WebkitAppearance: 'none',
                                        margin: 0,
                                    },
                                }}
                                startAdornment={<InputAdornment position="start">{ }</InputAdornment>}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ ...fieldTextStyle(theme) }}>
                            {t("formAcademics.Age")}
                        </Typography>
                        <TextField
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            type='number'
                            fullWidth
                            placeholder={t("formAcademics.YourAge")}
                            sx={{
                                ...textFieldStyle(theme),
                                '& input[type=number]': {
                                    MozAppearance: 'textfield',
                                },
                                '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                                    WebkitAppearance: 'none',
                                    margin: 0,
                                },

                            }}
                        />

                    </Box>
                    <Typography sx={{ ...fieldTextStyle(theme) }}>
                        {t("formAcademics.Gender")}
                    </Typography>
                    <FormControl fullWidth>
                        <Select
                            sx={{
                                ...textFieldStyle(theme),
                                '& .MuiSelect-icon': {
                                    color: theme.palette.mode === "dark" ? "#FFFFFF" : '#051A2F',
                                    fontSize: {
                                        lg: "50px",
                                        md: "50px",
                                        sm: "50px",
                                        xs: "30px"
                                    },

                                },
                                '& .MuiSelect-select': {
                                    color: theme.palette.mode === "dark" ? "#FFFFFF" : '#29547E',
                                    fontSize: {
                                        lg: "15px",
                                        md: "15px",
                                        sm: "15px",
                                        xs: "11px"
                                    }
                                },
                                '& .MuiMenuItem-root.Mui-selected': {
                                    backgroundColor: 'your-selected-background-color',
                                },
                                '& .MuiSelect-icon': {
                                    fontSize: {
                                        lg: "50px",
                                        md: "50px",
                                        sm: "50px",
                                        xs: "30px"
                                    },
                                    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#051A2F",
                                    padding: "0 !important",
                                    marginRight: dir === 'rtl' &&
                                    {
                                        lg: "-6px",
                                        md: "-6px",
                                        sm: "-6px",
                                        xs: "-6px"
                                    }
                                    ,

                                    marginTop: {
                                        lg: "-2px",
                                        md: "-2px",
                                        sm: "-2px",
                                        xs: "1px"
                                    }

                                },

                                height: {
                                    lg: "58px",
                                    md: "58px",
                                    sm: "58px",
                                    xs: "40px"
                                },
                                '& .MuiSelect-select': {
                                    paddingRight: dir === 'rtl' && "44px !important",

                                },
                            }}
                            displayEmpty
                            value={selectedGender}
                            onChange={handleGenderChange}
                            inputProps={{ 'aria-label': 'Without label' }}

                        >
                            <MenuItem value="" disabled
                                sx={{
                                    color: "#29547E !important"
                                }}
                            >
                                {t("formAcademics.GenderType")}
                            </MenuItem>
                            <MenuItem value="male"> {t("formAcademics.Male")}</MenuItem>
                            <MenuItem value="female"> {t("formAcademics.Female")}</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
        </>
    )
}
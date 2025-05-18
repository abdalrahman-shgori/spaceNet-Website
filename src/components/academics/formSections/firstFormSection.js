import React from "react";
import {Grid, TextField, Box, Typography } from '@mui/material';
import {
    textFieldStyle,
    fieldTextStyle,
    unifiedInputStyle,
    inputFieldStyle
} from '../formstyle';
import { useTranslation } from "react-i18next";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';

export default function FirstFormSection({
    theme,
    countryCode,
    setCountryCode,
    countries,
    phoneNumber,
    handlePhoneChange,
    handleChange,
    formData,
    passwordError,
    handleConfirmPasswordChange,
    CheckCircleIcon,
    ErrorIcon


}) {
    const { t, i18n } = useTranslation()
    const dir = i18n.dir()
    const passwordsMatch = formData.password && formData.confirmPassword === formData.password;

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
                                ...textFieldStyle(theme),
                            }}
                        />

                    </Box>

                    <Box sx={{ width: '100%' }}>
                        <Typography sx={{ ...fieldTextStyle(theme) }}> {t("formAcademics.PhoneNumber")} </Typography>

                        <Box sx={{...unifiedInputStyle(theme),direction:"ltr"}}
                        
                        >
                            <Select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                variant="standard"
                                disableUnderline
                                sx={
                                    {
                                        paddingLeft: {
                                            lg: "12px",
                                            md: "12px",
                                            sm: "12px",
                                            xs: "8px"
                                        },
                                      
                                        color: theme.palette.mode === "dark" ? "#FFFFFF" : "#29547E",
                                        textDecoration: "underline",
                                        '& .MuiSelect-select': {
                                            paddingRight: "4px !important",
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
                                            marginRight: {
                                                lg: "-36px",
                                                md: "-36px",
                                                sm: "-36px",
                                                xs: "-26px"
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
                                            marginRight: "-36px",
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
                                required
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
                          
                        </Box>

                        <TextField
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                            placeholder={t("formAcademics.YourEmail")}
                            sx={{
                                ...textFieldStyle(theme)
                            }}
                        />
                    </Box>

                    <Typography sx={{ ...fieldTextStyle(theme), display: "flex", alignItems: "center", gap: "5px" }}>
                        {t("formAcademics.password")}
                        {passwordError && (
                            <Typography sx={{ color: "red", fontSize: "10px", padding: '0' }}>
                                {passwordError}
                            </Typography>
                        )}
                    </Typography>

                    <TextField
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        fullWidth
                        required
                        placeholder={t("formAcademics.password")}
                        sx={{
                            ...textFieldStyle(theme)
                        }}
                        
                    />

                    <Typography sx={{ ...fieldTextStyle(theme) }}>
                        {t("formAcademics.ConfirmPass")}
                    </Typography>
                    <TextField
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        fullWidth
                        required
                        placeholder={t("formAcademics.ConfirmPass")}
                        sx={textFieldStyle(theme)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    {formData.confirmPassword && (passwordsMatch ? (
                                        <CheckCircleIcon sx={{ color: "green" }} />
                                    ) : (
                                        <ErrorIcon sx={{ color: "red" }} />
                                    ))}
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Grid>
        </>
    )
}
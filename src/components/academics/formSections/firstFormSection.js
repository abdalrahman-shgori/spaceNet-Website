import React from "react";
import { FormControl, Grid, TextField, Box, Typography } from '@mui/material';
import {
    textFieldStyle,
    fieldTextStyle,
    unifiedInputStyle,
    inputFieldStyle
} from '../formstyle';
import { MenuItem, Select, InputBase, InputAdornment } from '@mui/material';

export default function FirstFormSection({
    theme,
    countryCode,
    setCountryCode,
    countries,
    phoneNumber,
    handlePhoneChange,
    selectedGender,
    handleChange
}) {

    return (
        <>
            <Grid item lg={6} md={6} sm={12} xs={12}
                sx={{
                    paddingRight: {
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
                        <Typography sx={{ ...fieldTextStyle(theme) }}>Name</Typography>
                        <TextField
                            fullWidth
                            placeholder="Your Name"
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
                                Email
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
                                (Optional)
                            </Typography>
                        </Box>

                        <TextField
                            fullWidth
                            placeholder="Your Name"
                            sx={{
                                ...textFieldStyle(theme)
                            }}
                        />
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Typography sx={{ ...fieldTextStyle(theme) }}>Phone Number</Typography>

                        <Box sx={unifiedInputStyle(theme)}>
                            <Select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                variant="standard"
                                disableUnderline
                                sx={{
                                    paddingRight: '0px',
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
                                        },
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
                                }}
                            >
                                {countries.map((country) => (

                                    <MenuItem key={country.code} value={country.callingCode}>
                                        {country.callingCode} {country.name}
                                    </MenuItem>
                                ))}
                            </Select>

                            <InputBase
                                placeholder="Your Phone Number"
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                fullWidth
                                sx={inputFieldStyle(theme)}
                                startAdornment={<InputAdornment position="start">{ }</InputAdornment>}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ ...fieldTextStyle(theme) }}>Age</Typography>
                        <TextField
                            type='number'
                            fullWidth
                            placeholder="Your Age"
                            sx={{
                                ...textFieldStyle(theme),
                            }}
                        />

                    </Box>
                    <Typography sx={{ ...fieldTextStyle(theme) }}>Gender</Typography>
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
                                height: {
                                    lg: "58px",
                                    md: "58px",
                                    sm: "58px",
                                    xs: "40px"
                                },

                            }}
                            displayEmpty
                            value={selectedGender}
                            onChange={handleChange} inputProps={{ 'aria-label': 'Without label' }}

                        >
                            <MenuItem value="" disabled
                                sx={{
                                    color: "#29547E !important"
                                }}
                            >
                                Gender Type
                            </MenuItem>
                            <MenuItem value="male">MALE</MenuItem>
                            <MenuItem value="female">FEMALE</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
        </>
    )
}
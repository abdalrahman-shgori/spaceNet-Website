import React from "react";
import { Box, Typography, Button, Checkbox, FormControlLabel, Grid, Radio, RadioGroup, TextField, useTheme } from '@mui/material';
import {
    textFieldStyle,
    fieldTextStyle,
    radioStyle,

} from '../formstyle';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CalenderIcon from '../../../assets/sectionsImages/academics/calender';
import TimePickerIcon from '../../../assets/sectionsImages/academics/timepicker';

export default function SecFormSection({
    theme
}) {

    return (
        <>
            <Grid item lg={6} md={6} sm={12} xs={12}
                sx={{
                    paddingLeft: {
                        lg: "50px",
                        md: "20px",
                        sm: "unset",
                        xs: "unset"
                    }
                }}
            >
                <Box
                    sx={{
                        padding: {
                            lg: "unset",
                            md: "unset",
                            sm: "0px 9px 0px 45px",
                            xs: "0px 9px 0px 45px"
                        }
                    }}
                >
                    <Box
                        sx={{
                            padding: {
                                lg: "unset",
                                md: "unset",
                                sm: "0px 36px 0px 0px",
                                xs: "0px 36px 0px 0px"
                            }
                        }}
                    >
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
                            <Typography sx={{ ...fieldTextStyle(theme) }}>Background</Typography>
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
                            placeholder="Educational and Professional Background"
                            sx={{
                                ...textFieldStyle(theme),
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            mb: {
                                lg: "14px",
                                md: "14px",
                                sm: "14px",
                                xs: "15px"
                            },
                        }}
                    >
                        <Typography sx={{ ...fieldTextStyle(theme) }}>Course Type</Typography>
                        <RadioGroup row >
                            <FormControlLabel sx={{ ...radioStyle(theme), marginRight: { lg: "10px", md: "8px", sm: "10px", xs: "7px" } }} value="online" control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: { lg: 22, md: 22, sm: 20, xs: 15 } } }} />} label="Online" />
                            <FormControlLabel sx={{ ...radioStyle(theme), marginRight: { lg: "10px", md: "8px", sm: "10px", xs: "7px" } }} value="classroom" control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: { lg: 22, md: 22, sm: 20, xs: 15 } } }} />} label="Classroom" />
                            <FormControlLabel sx={{ ...radioStyle(theme) }} value="bootcamp" control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: { lg: 22, md: 22, sm: 20, xs: 15 } } }} />} label="Bootcamp" />
                        </RadioGroup>
                    </Box>
                    <Box
                        sx={{
                            mb: {
                                lg: "14px",
                                md: "14px",
                                sm: "14px",
                                xs: "15px"
                            },
                        }}
                    >
                        <Typography sx={{ ...fieldTextStyle(theme) }}>Languages</Typography>
                        <RadioGroup row  >
                            <FormControlLabel sx={{ ...radioStyle(theme), marginRight: { lg: "10px", md: "8px", sm: "10px", xs: "7px" } }} value="kurdish" control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: { lg: 22, md: 22, sm: 20, xs: 15 } } }} />} label="Kurdish" />
                            <FormControlLabel sx={{ ...radioStyle(theme), marginRight: { lg: "10px", md: "8px", sm: "10px", xs: "7px" } }} value="english" control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: { lg: 22, md: 22, sm: 20, xs: 15 } } }} />} label="English" />
                            <FormControlLabel sx={radioStyle(theme)} value="arabic" control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: { lg: 22, md: 22, sm: 20, xs: 15 } } }} />} label="Arabic" />
                        </RadioGroup>
                    </Box>
                    <Box
                        sx={{
                            mb: {
                                lg: "14px",
                                md: "14px",
                                sm: "14px",
                                xs: "15px"
                            },
                        }}
                    >
                        <Typography sx={{ ...fieldTextStyle(theme) }}>Which services are you Looking for?</Typography>
                        <RadioGroup row>
                            <FormControlLabel
                                sx={{
                                    marginRight: { lg: "10px", md: "6px", sm: "10px", xs: "7px" },
                                    ...radioStyle(theme),
                                    '& .MuiCheckbox-root':
                                    {
                                        color: theme.palette.mode === "dark" ? "#FFFFFF" : '#29547E',
                                        width: {
                                            lg: "30px",
                                            md: "30px",
                                            sm: "30px",
                                            xs: "10px"
                                        },

                                    },
                                    '& .Mui-checked': {
                                        color: theme.palette.mode === "dark" ? "#FFFFFF !important" : '#051A2F !important',
                                    },

                                }}
                                value="networking"
                                control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: { lg: 22, md: 22, sm: 20, xs: 15 } } }} />}
                                label="Networking"
                            />

                            <FormControlLabel
                                sx={{
                                    marginRight: { lg: "10px", md: "6px", sm: "10px", xs: "7px" },
                                    ...radioStyle(theme),
                                    '& .MuiCheckbox-root':
                                    {
                                        color: theme.palette.mode === "dark" ? "#FFFFFF" : '#29547E',
                                        width: {
                                            lg: "30px",
                                            md: "30px",
                                            sm: "30px",
                                            xs: "10px"
                                        }
                                    },
                                    '& .Mui-checked': {
                                        color: theme.palette.mode === "dark" ? "#FFFFFF !important" : '#051A2F !important',
                                    },
                                }}
                                value="design"
                                control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: { lg: 22, md: 22, sm: 20, xs: 15 } } }} />}
                                label="Design"
                            />
                            <FormControlLabel
                                sx={{
                                    ...radioStyle(theme),
                                    '& .MuiCheckbox-root':
                                    {
                                        color: theme.palette.mode === "dark" ? "#FFFFFF" : '#29547E',
                                        width: {
                                            lg: "30px",
                                            md: "30px",
                                            sm: "30px",
                                            xs: "10px"
                                        }
                                    },
                                    '& .Mui-checked': {
                                        color: theme.palette.mode === "dark" ? "#FFFFFF !important" : '#051A2F !important',
                                    },
                                }} 
                                value="software & it" control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: { lg: 22, md: 22, sm: 20, xs: 15 } } }} />} label="Software & IT"
                            />
                        </RadioGroup>
                    </Box>

                    <Grid container
                        sx={{
                            gap: "10px"
                        }}
                    >

                        <Box
                            sx={{
                                maxWidth: {
                                    lg: "170px",
                                    md: "170px",
                                    sm: "170px",
                                    xs: "130px"
                                }
                            }}
                        >
                            <Typography sx={{ ...fieldTextStyle(theme) }}>Start Day</Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    sx={{
                                        height: {
                                            lg: "58px",
                                            md: "58px",
                                            sm: "58px",
                                            xs: "39px"
                                        },
                                        ...textFieldStyle(theme),
                                        '& input': {},
                                        '& .css-elo8k2-MuiInputAdornment-root': {
                                            margin: "0 !important",
                                            paddingRight: {
                                                lg: "18.55px",
                                                md: "12.55px",
                                                sm: "18.55px",
                                                xs: "12px"
                                            },


                                        },
                                        "& .css-15guoxn":{
                                            padding:0,
                                            paddingRight:"12px"
                                           },
                                        '& .css-oeq6yz-MuiButtonBase-root-MuiIconButton-root': {
                                            padding:0,
                                        },
                                        '& .css-1dune0f-MuiInputBase-input-MuiOutlinedInput-input': {
                                            padding: "0",
                                            paddingLeft: {
                                                lg: "18.55px",
                                                md: "12.55px",
                                                sm: "18.55px",
                                                xs: "12px"
                                            },
                                        }
                                    }}
                                    slots={{
                                        openPickerIcon: CalenderIcon
                                    }}
                                    desktopModeMediaQuery="(min-width: 0px)"
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            InputProps={{
                                                ...params.InputProps,
                                            }}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Box>


                        <Box
                            sx={{
                                maxWidth: {
                                    lg: "140px",
                                    md: "140px",
                                    sm: "140px",
                                    xs: "111px"
                                }
                            }}
                        >
                            <Typography sx={{ ...fieldTextStyle(theme) }}>Time</Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    sx={{
                                        height: {
                                            lg: "58px",
                                            md: "58px",
                                            sm: "58px",
                                            xs: "39px"
                                        },
                                        ...textFieldStyle(theme),
                                        '& input': {
                                            margin: "0 !important",

                                        },
                                        '& .css-elo8k2-MuiInputAdornment-root': {
                                            margin: "0 !important",

                                        },
                                        '& .css-elo8k2-MuiInputAdornment-root': {
                                            margin: "0 !important",
                                            padding:"0",
                                            paddingRight: {
                                                lg: "18.55px",
                                                md: "12.55px",
                                                sm: "18.55px",
                                                xs: "12px"
                                            },


                                        },
                                        '& .css-oeq6yz-MuiButtonBase-root-MuiIconButton-root': {
                                            padding:0,

                                        },
                                        "& .css-15guoxn":{
                                         padding:0,
                                         paddingRight:"12px"

                                        },
                                        '& .css-1dune0f-MuiInputBase-input-MuiOutlinedInput-input': {
                                            padding: "0",
                                            paddingLeft: {
                                                lg: "18.55px",
                                                md: "12.55px",
                                                sm: "18.55px",
                                                xs: "12px"
                                            },
                                        }
                                    }}
                                    slots={{

                                        openPickerIcon: TimePickerIcon
                                    }}
                                    desktopModeMediaQuery="(min-width: 0px)"
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            sx={textFieldStyle(theme)}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Box>

                    </Grid>
                    <Box
                        sx={{
                            marginTop: {
                                lg: "30px",
                                md: "30px",
                                sm: "30px",
                                xs: "16px"
                            }
                        }}
                    >
                        <Button
                            sx={{
                                bgcolor: theme.palette.mode === "dark" ? "#FFFFFF" : '#000',
                                color: theme.palette.mode === "dark" ? "#051A2F" : '#FFFFFF',
                                width: "fit-content",
                                padding: {
                                    lg: "22px 52px 22px 52px",
                                    md: "22px 52px 22px 52px",
                                    sm: "22px 52px 22px 52px",
                                    xs: "9px 21px 9px 21px"
                                },
                                fontSize: {
                                    lg: "23px",
                                    md: "23px",
                                    sm: "17px",
                                    xs: "15.7px"
                                },
                                fontFamily: "var(--English-font-semibold)",
                                borderRadius: "94px",
                                textTransform: "capitalize",
                                height: {
                                    lg: "64px",
                                    md: "64px",
                                    sm: "64px",
                                    xs: "44px"
                                }
                            }}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}
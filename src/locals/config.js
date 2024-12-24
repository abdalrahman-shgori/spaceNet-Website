// @mui
import { enUS, arSD,kuCKB } from "@mui/material/locale";

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export const allLangs = [
    {
        label: "English",
        value: "en",
        systemValue: enUS,
        //  icon: '/assets/icons/flags/ic_flag_en.svg',
    },
    {
        label: "العربية",
        value: "ar",
        systemValue: arSD,
        // icon: '/assets/icons/flags/ic_flag_sa.svg',
    },
    {
        label: "کوردی",
        value: "ku",
        systemValue: arSD,
    },
];

export const defaultLang = allLangs[0]; // English

import { ThemeOptions } from "@mui/material";
import { palette } from "@mui/system";

export const Theme: ThemeOptions = {
    palette: {
        primary: {
            main: '#d29c44'
        },
        secondary: {
            main: '#194b80',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 5,
                    boxShadow: 'none'
                }
            },
        }
    },
}
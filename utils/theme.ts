import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
	palette: {
	  primary: {
	    main: '#FFF',
	  }
	},
	typography: {
		// fontFamily: 'Electrofied',
		fontFamily: 'Be Vietnam Pro',
		fontSize: 14,
		// fontWeightLight: 300,
		// fontWeightRegular: 400,
		// fontWeightMedium: 500,
		button: {
			// fontFamily: 'Be Vietnam Pro',
			fontSize: 16,
		},
	},
	components: {
		MuiButton: {
			defaultProps: { variant: 'contained', size: 'large' },
			styleOverrides: {
        root: {
          // borderRadius: '16px',
        },
      },
		},
		MuiIconButton: { defaultProps: { size: 'large' } },
		MuiLink: {
			defaultProps: {
				underline: 'none',
			},
			styleOverrides: {
				root: {
					'&:hover': {
						cursor: 'pointer',
					},
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					textTransform: 'none',
				},
			},
		},
	},
	breakpoints: {
	  values: { xs: 0, sm: 600, md: 960, lg: 1200, xl: 1440 },
	},
});

export default responsiveFontSizes(theme, {});

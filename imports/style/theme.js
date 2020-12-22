import { createMuiTheme } from '@material-ui/core'

const colors = {
  babyBlue: '#00B8E1',
  dotGradient: 'linear-gradient(45deg, #00b8e1 40%, #ff00c8 90%)',
  backgroundGray: '#303030',
  white: '#FFF',
  gray: '#BEBEBE'
}

export default createMuiTheme({
  palette: {
    primary: {
      main: colors.babyBlue,
      mainGradient: colors.dotGradient
    },
    secondary: { main: colors.white },
    text: {
      primary: colors.white,
      secondary: colors.gray
    },
    type: 'dark'
  },
  props: { MuiTextField: { color: 'secondary' } }
})

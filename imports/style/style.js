import { createStyles, makeStyles } from '@material-ui/core'
import theme from './theme'

const useStyles = makeStyles(() => createStyles({
  bgMain: {
    background: theme.palette.primary.mainGradient
  }
}))

export default useStyles

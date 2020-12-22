import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, Snackbar } from '@material-ui/core'
import { Alert as MuiAlert } from '@material-ui/lab'
import useStyles from '../style/style'
import Link from 'next/link'
import { requester } from '../util/requester'

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' severity='error' {...props}/>
}

const Nav = ({ children }) => {
  const style = useStyles()
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('Something went wrong.')

  const handleClick = async () => {
    const token = typeof window !== 'undefined' && window.localStorage.getItem('token')
    if (token) {
      requester.run('logout').catch((e) => {
        setOpen(true)
        setMessage('Failed to logout.')
        console.error(e)
      }).then(() => typeof window !== 'undefined' && window.localStorage.removeItem('token'))
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <AppBar position='static'>
        <Toolbar className={style.bgMain}>
          <Typography variant='h6' color='textPrimary' className='title' style={{ flex: 1 }}>
            {children}
          </Typography>
          <Link href='/'>
            <Button color='secondary' onClick={handleClick}>
              {typeof window !== 'undefined' && window.localStorage.getItem('token') ? 'Logout' : 'Login'}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose}>
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default Nav

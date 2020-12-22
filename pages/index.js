import { Button, Container, Grid, Paper, TextField, Typography, Box } from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Nav from '../imports/components/Nav'
import useStyles from '../imports/style/style'
import { requester } from '../imports/util/requester'

const Index = () => {
  const router = useRouter()
  const classes = useStyles()
  const [invalidLogin, setInvalidLogin] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      router.push('/dashboard')
    }
  })

  const login = async (usr, pwd) => {
    try {
      const res = await requester.run('login', { username: usr, password: pwd })
      console.log(res)
      if (res.ok) {
        const json = await res.json()
        localStorage.setItem('auth', json.auth)
        return await router.push('/dashboard')
      }
      setInvalidLogin(true)
    } catch (e) {
      setInvalidLogin(true)
      console.log(e)
    }
  }

  return (
    <>
      <Nav>ChillClips</Nav>
      <Container maxWidth='sm'>
        <Paper elevation={3}>
          <Box m={2}>
            <Typography variant='h5' color='textPrimary' className='title' align='center'>Login required</Typography>
            <TextField
              label='Username'
              fullWidth
              required
              autoFocus
              onChange={e => setUsername(e.target.value)}
              error={invalidLogin}
              className={classes.bottomSpacing}
              onKeyDown={e => e.key === 'Enter' && login(username, password)}
            />
            <TextField
              label='Password'
              fullWidth
              required
              type='password'
              onChange={e => setPassword(e.target.value)}
              error={invalidLogin}
              className={classes.bottomSpacing}
              onKeyDown={e => e.key === 'Enter' && login(username, password)}
            />
            {invalidLogin && <Typography color='error'>Username or password incorrect.</Typography>}
            <Grid container justify='center'>
              <Button
                color='inherit'
                className={classes.bgMain}
                size='large'
                variant='contained'
                disabled={!(username && password)}
                onClick={async () => await login(username, password)}
              >
                Login
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  )
}

export default Index

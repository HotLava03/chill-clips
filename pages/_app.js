import React, { StrictMode } from 'react'
import App from 'next/app'
import Head from 'next/head'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from '../imports/style/theme'

export default class ChillClipsApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <meta
            name='viewport'
            content='user-scalable=0, initial-scale=1,
              minimum-scale=1, width=device-width, height=device-height'
          />
          <title>ChillClips</title>
        </Head>
        <StrictMode>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </StrictMode>
      </>
    )
  }
}

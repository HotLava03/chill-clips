
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../imports/style/theme'

export default class ChillClipsDocument extends Document {
  render () {
    return (
      <Html lang='en' dir='ltr'>
        <Head>
          <link rel='icon' href='/static/widgets.png' />
          <meta charSet='utf-8' />
          <meta name='description' content='Simple platform to upload and share clips.' />
          <meta name='theme-color' content={theme.palette.primary.main} />
          <meta property='og:type' content='website' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

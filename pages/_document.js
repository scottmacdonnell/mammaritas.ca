import Document, { Html, Head, Main, NextScript } from 'next/document'

import { getLangFromReq } from '../utils/fromReq'

export default class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const lang = getLangFromReq(ctx.req)
    return { ...initialProps, lang }
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          {/* Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#D2C3AE" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#BE180C" />
          <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#D2C3AE" media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content="#101010" media="(prefers-color-scheme: dark)" />
          <meta name="theme-color" content="#D2C3AE" />

          {/* Web Manifest */}
          <link rel="manifest" href="/manifest.json" />

          {/* Global Meta Tags (Page.js) - OpenGraph */}
          <meta name="og:type" property="og:type" content="website" key="og:type" />
          <meta property="og:locale" content="en_US" key="og:locale" />
          <meta name="og:site_name" property="og:site_name" content="Scott MacDonnell" key="og:sitename" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
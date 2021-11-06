import Head from 'next/head'

import '../styles/globals.scss'

export default function MammaRitasCucina({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
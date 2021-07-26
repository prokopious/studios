import "../main.scss"
import Head from "next/head"
import { ApolloProvider } from "@apollo/client"
import client from "../apollo-client"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../static/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../static/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../static/images/favicon-16x16.png"
        />
      </Head>
      <ApolloProvider client={client}>
        <div id="boody">
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
      <style jsx>{`
        #boody {
          animation: fadeInAnimation ease 2s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
        }
        @keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
      `}</style>
    </>
  )
}

export default MyApp

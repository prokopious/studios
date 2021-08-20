import "../main.scss"
import { ApolloProvider } from "@apollo/client"
import client from "../apollo-client"

function MyApp({ Component, pageProps }) {
  return (
    <>
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

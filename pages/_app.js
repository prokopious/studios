import "../main.scss"

function MyApp({ Component, pageProps }) {
  return (
    <div id="boody">
      <Component {...pageProps} />
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
    </div>
  )
}

export default MyApp

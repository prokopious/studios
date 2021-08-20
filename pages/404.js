import Layout from "../components/Layout"
import Nav from "../components/Nav"
import Head from 'next/head'

export default function sparrow() {
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
      <Layout>
        <div id="cover">
          <Nav bg="white" color="black" mode="hard-light" />
          <div className="center">404 | A Page Too Far</div>
        </div>

        <style jsx>{`
          #cover {
            position: relative;
            padding-bottom: 100px;
            min-height: 100vh;
            background-image: linear-gradient(
              to top,
              #505285 0%,
              #585e92 12%,
              #65689f 25%,
              #7474b0 37%,
              #7e7ebb 50%,
              #8389c7 62%,
              #9795d4 75%,
              #a2a1dc 87%,
              #b5aee4 100%
            );
          }

          .center {
            position: fixed;
            font-size: 23px;
            font-weight: 600;
            color: white;

            top: 50%;
            left: 50%;
            /* bring your own prefixes */
            transform: translate(-50%, -50%);
          }
        `}</style>
      </Layout>
    </>
  )
}

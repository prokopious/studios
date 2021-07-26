import Layout from "../components/Layout"
import Nav from "../components/Nav"

export default function sparrow() {
  return (
    <Layout>
      <div id="cover">
        <Nav bg="white" color="black" mode="hard-light" />
        <div className="center"><div id="succ">Success!</div><div id="home">RETURN HOME</div></div>
    
      </div>

      <style jsx>{`
        #cover {
            position: relative;
        padding-bottom: 100px;
        min-height: 100vh;
        background-image: linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);
        }
#succ {
  font-size: 30px;
}
        #home {
          font-size: 14px;
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
  )
}


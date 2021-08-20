import Layout from "../components/Layout";
import Nav from "../components/Nav";
import { NextSeo } from "next-seo";

const Homepage = () => (
  <>
    <NextSeo
      title="Hanover Web Studios E-Commerce Website Designs"
      description="Small business web design. We serve Richmond, RVA, Hanover, Mechanicsville, and Henrico Virginia with online shops, storefronts, and checkout flows."
      additionalLinkTags={[
        {
          rel: "icon",
          href: "../static/images/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          href: "/images/apple-touch-icon.png",
          sizes: "180x180",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "../static/images/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "../static/images/favicon-32x32.png",
        },
        {
          rel: "manifest",
          href: "/manifest.json",
        },
      ]}
    />
    <div className="cover">
      <Nav mode="hard-light" />
      <Layout>
        <div id="other">
          <div id="boxy">
            <div id="design">Digital Storefront Design</div>
            <div id="email">hanoverwebstudios@gmail.com</div>{" "}
            <div id="phone">804-548-3245</div>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        #design {
          font-size: calc(30px);
          font-weight: 600;
          color: rgb(0, 0, 0);
        }

        #email {
          font-size: 20px;
          font-weight: 600;
        }

        #boxy {
          padding-top: calc(2em + 0.7vw);
          padding-bottom: calc(2em + 0.7vw);
          mix-blend-mode: hard-light;
          background-color: $navbar-background-color;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.644);
          border-radius: 3px;
          max-width: 500px;
        }
        .cover {
          position: relative;
          min-height: 100vh;
          mix-blend-mode: darken;
          background: url("../static/st2.jpg") no-repeat center center;
          background-size: cover;
        }

        #other {
          padding-top: 3vw;
          padding-bottom: 0;
          padding-right: 55vw;
          padding-left: 3vw;
        }

        #phone {
          font-size: 20px;
        }

        @media (max-width: 900px) {
          #design {
            font-size: calc(25px);
            font-weight: 600;
            color: black;
          }
          #boxy {
            padding-top: calc(2em + 0.7vw);
            padding-bottom: calc(2em + 0.7vw);

            mix-blend-mode: hard-light;
            background-color: $navbar-background-color;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.644);
            border-radius: 3px;
          }
          #other {
            padding-top: 10vw;
            padding-bottom: 0;
            padding-right: 10vw;
            padding-left: 10vw;
          }
          #email {
            font-size: 16px;
            font-weight: 600;
          }
          #phone {
            font-size: 16px;
          }
        }

        @media (max-width: 600px) {
          #design {
            font-size: calc(16px + 1vw);
            font-weight: 600;
            color: black;
          }

          #boxy {
            padding-right: calc(0.5em + 0.3vw);
            padding-left: calc(0.5em + 0.3vw);
            padding-top: calc(2em + 0.7vw);
            padding-bottom: calc(2em + 0.7vw);
            background-color: $navbar-background-color;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.644);
            border-radius: 3px;
          }
        }
      `}</style>
    </div>
  </>
)

export default Homepage

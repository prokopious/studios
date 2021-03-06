import Layout from "../components/Layout"
import Nav from "../components/Nav"
import { NextSeo } from "next-seo"

const Portfolio = () => {
  return (
    <>
      {" "}
      <NextSeo
        title="Portfolio of RVA e-commerce website designs"
        description="These RVA, Richmond, and Hanover e-commerce and digital storefront examples are made using a variety of checkout flows, such as Shopify, Snipcart, and Stripe."
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
      <Layout>
        <div id="cover">
          <Nav bg="transparent" color="#535353" mode="normal" />
          <h3 id="h">Portfolio</h3>
          <div className="gallery">
            <div>
              {" "}
              <div className="image">
                <a href="https://determined-leakey-9c05aa.netlify.app/">
                  <img src={"https://www.linkpicture.com/q/bakery.jpg"} />
                </a>
              </div>
            </div>

            <div>
              <div className="image">
                <a href="https://shopify-alpha.vercel.app/">
                  <img src={"https://www.linkpicture.com/q/farms_1.jpg"} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .gallery {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 30px;
            margin-bottom: 50px;
            max-width: 900px;
            margin: 0 auto;
            padding-bottom: 400px;
          }

          #cover {
            position: relative;
            background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
            min-height: 100vh;
            background-size: cover;
          }
          img {
            border-radius: 5px;

            border-radius: 5px;
          }

          .image {
            border-radius: 5px;

            transition: all 500ms ease-out;
          }
          .image:hover {
            padding: 0px;
            transform: scale(1.05);
          }
          .image2 {
            border-radius: 5px;
          }
          .image2:hover {
            padding: 0;
            transition: all 500ms ease-out;
            border-radius: 5px;
          }

          #h {
            margin-top: 0;
            padding-top: 30px;

            font-size: 24px;
            font-weight: 500;
            color: #535353;
          }

          @media (max-width: 700px) {
            #h {
              padding-top: 25px;
              padding-bottom: 0px;
              font-size: 20px;
            }
            .gallery {
              grid-template-columns: 1fr;
              grid-gap: 25px;
              margin-bottom: 200px;
              max-width: 400px;
              margin: 0 auto;
              padding-bottom: 300px;
              padding-left: 10px;
              padding-right: 10px;
              padding-top: 0px;
              padding-bottom: 70px;
            }
            .label {
              font-size: 15px;
              text-transform: uppercase;
              font-weight: 500;
              color: rgb(0, 0, 0);
              padding-top: 10px;
            }
          }
        `}</style>
      </Layout>
    </>
  )
}

export default Portfolio

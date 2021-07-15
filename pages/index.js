import Link from 'next/link';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const images = [
  '/static/portfolio/14.jpg',
  '/static/portfolio/13.jpg',
  '/static/portfolio/12.jpg',
  '/static/portfolio/11.jpg'
];

const Homepage = () => (
  <Layout>
    <div className="cover">
      <div className="hello">
        {/* <h4 id="em">Todd and Emily Huyett</h4> */}
        <h4 className="heading">Online Storefront and Checkout Design</h4>
        <div><span className="s">toddhuyett@gmail.com</span>|<span className="s">703-635-9598</span></div>
        <Link href="/services">
          <a className="view-more">our services</a>
        </Link>
      </div>
    </div>
    <div className="latest-work">
      <h2>Recent Projects</h2>
      <Gallery images={images} />
      <div className="">
        <Link href="/portfolio">
          <a className="view-more">View All</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .cover {
        position: relative;
        min-height: 600px;
        background: transparent url(https://www.linkpicture.com/q/office2.jpg) no-repeat center center;
        background-size: cover;
      }
      .hello {
        position: absolute;
        top: 60px;
        left: 60px;
        background: #fff;
        padding: 30px;
        border-radius: 3px;
        box-shadow: 0px 1px;
      }

      .heading {
        margin: 0px;
        margin-top: 10px;
      }
      .hello h1 {
        margin: 0 0 10px 0;
      }
      a.view-more {
        text-transform: uppercase;
        font-size: 16px;
      }
.s {
padding: 5px;
font-size: 16px;
}
      #em {
margin-bottom: 0px;
      }
      .latest-work {
        text-align: center;
        padding: 30px 0;
        margin-bottom: 60px;
      }
      @media (max-width: 480px) {
        .hello {
          left: 30px;
          right: 30px;
          font-size: 16px;
          padding: 20px;
        }
        .heading {
        margin: 0px;
        margin-top: 10px;
        font-size: 14px;
      }
  
      }
    `}</style>
  </Layout>
);

export default Homepage;

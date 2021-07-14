import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
       <div id="hanover"><b>Hanover</b> Studios</div> 
      </a>
    </Link>

    <style jsx>{`
      .logo img {
        display: block;
        width: 220px;
      }
      @media (max-width: 600px) {
        .logo {
          display: inline-block;
        }

        #hanover {
          color: black;
        }
      }
    `}</style>
  </div>
);

export default Logo;

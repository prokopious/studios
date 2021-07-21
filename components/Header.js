import Logo from '../components/Logo';
import Menu from '../components/Menu';

const Header = () => (
  <div className="header-wrapper">
    <Logo />
    <Menu />
    <style jsx>{`
      .header-wrapper {

        padding: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    

  box-shadow: 0px 2px 5px #5e5e5e36;
  border-bottom: 1px solid #5e5e5e36;
  
      }
      @media (max-width: 600px) {
        .header-wrapper {
        
          display: block;
          text-align: center;

        }
      }
    `}</style>
  </div>
);

export default Header;

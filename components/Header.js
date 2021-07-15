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
        border-bottom: 1px solid rgb(194, 194, 194);
  
      }
      @media (max-width: 600px) {
        .header-wrapper {
        
          display: block;
          text-align: center;
          border-bottom: 1px solid rgb(214, 213, 213);
        }
      }
    `}</style>
  </div>
);

export default Header;

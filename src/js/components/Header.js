import returnArrow from '../../assets/arrow.svg';
import shop from '../../assets/shop.svg';
import '../../scss/components/Header.scss';
import { useHistory } from "react-router-dom";


const Header = () => {
  const history = useHistory();
  const goHomePage = () => history.replace('/');

  return (
    <div className="Header-header">
      <img src={returnArrow} className="Header-navbar-icons arrow" alt="logo" />
      
      <button 
        className="Header-title" 
        onClick={(e) => {
          e.preventDefault();
          goHomePage();
      }}>
        <span>DOG</span>
        <span className="bold">HUB</span>
      </button>

        <img src={shop} className="Header-navbar-icons" alt="logo" />

    </div>
  )
}

export default Header;
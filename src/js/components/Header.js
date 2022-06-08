import returnArrow from '../../assets/arrowIcon.svg';
import shop from '../../assets/shopIcon.svg';
import { useHistory } from "react-router-dom";
import classnames from 'classnames';

import '../../scss/components/Header.scss';

const Header = (props) => {
  const history = useHistory();
  const goHomePage = () => history.replace('/');
  const goCartPage = () => history.replace('/cart');
  const pathname = history.location.pathname;

  return (
    <div className="Header-header">
      <div>
        <img src={returnArrow} 
          className={
            classnames(
            'Header-navbar-icons',
            'arrow',
            { 'Header-home-page ': pathname === '/' },
          )}
          onClick={(e) => {
            e.preventDefault();
            goHomePage();
          }} 
          alt="logo" />
      </div>
      
      <button 
        className="Header-title" 
        onClick={(e) => {
          e.preventDefault();
          goHomePage();
      }}>
        <span>DOG</span>
        <span className="bold">HUB</span>
      </button>

        <img src={shop} 
          onClick={(e) => {
            e.preventDefault();
            goCartPage();
          }} 
          className="Header-navbar-icons" 
          alt="logo" />

    </div>
  )
}

export default Header;
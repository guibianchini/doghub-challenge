import returnArrow from '../../assets/arrowIcon.svg';
import shop from '../../assets/shopIcon.svg';
import '../../scss/components/Header.scss';

import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import classnames from 'classnames';

const Header = (props) => {
  const history = useHistory();
  const goHomePage = () => history.replace('/');
  const goCartPage = () => history.replace('/cart');
  const pathname = history.location.pathname;
  const { cart } = useSelector((state) => state);

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

        <div className="Header-shop-icon">
          {
            cart
            && cart.length > 0
            && (
              <span className="Header-notification-badge">{cart.length}</span>
            )
          }
          <img src={shop} 
            onClick={(e) => {
              e.preventDefault();
              goCartPage();
            }} 
            className="Header-navbar-icons" 
            alt="logo" 
          />
        </div>

    </div>
  )
}

export default Header;
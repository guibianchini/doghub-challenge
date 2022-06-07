import returnArrow from '../../assets/arrow.svg';
import shop from '../../assets/shop.svg';
import '../../scss/components/Header.scss';

const Header = () => {
  return (
    <div className="Header-header">
      <img src={returnArrow} className="Header-navbar-icons arrow" alt="logo" />

      <div className="Header-title">
          <span>DOG</span>
          <span className="bold">HUB</span>
      </div>

        <img src={shop} className="Header-navbar-icons" alt="logo" />

    </div>
  )
}

export default Header;
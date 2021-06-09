import React from "react";
import "./Header.css";
import Logo from "./amazon-logo-white.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header_optionLineOne">Hello guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div class="header__optionBasket">
          <ShoppingBasketIcon/>
          <span class="header__optionLineTwo header__basketCount">0</span>
        </div>

      </div>
    </div>
  );
}

export default Header;

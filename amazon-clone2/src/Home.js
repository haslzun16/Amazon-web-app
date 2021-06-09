import React from "react";
import "./Home.css";
import Product from "./Product"
function Home() {
  return (
    <div className="home">
      <div class="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div class="home__row">
          <Product />
          {/* product */}
        </div>
        <div class="home__row">
          {/* product */}
          {/* product */}
          {/* product */}
        </div>
        <div class="home__row">
            {/* product */}
        </div>
      </div>
    </div>
  );
}

export default Home;

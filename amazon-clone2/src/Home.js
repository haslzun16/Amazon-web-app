import React from "react";
import "./Home.css";
import Product from "./Product";
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
          <Product
            className="items"
            id="6396205"
            title="Atomic Habits "
            price={27.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51vSbWpF+dS._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            className="items"
            id="63646131"
            title="SteelSeries - Apex 3 Wired Gaming Whisper Quiet Switch Keyboard with 10 zone RGB Backlighting - Black"
            price={49.99}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6396/6396205_sd.jpg;maxHeight=640;maxWidth=550"
            rating={4}
          />
        </div>
        <div class="home__row">
          <Product
            className="items"
            id="68632389"
            title="NutriBullet - 4-Speed Blender - Dark Gray "
            price={99.99}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6354/6354060_rd.jpg;maxHeight=640;maxWidth=550"
            rating={5}
          />
          <Product
            className="items"
            id="86138113"
            title="VIZIO - 50 Class V-Series LED 4K UHD SmartCast TV"
            price={329.99}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416380_sd.jpg;maxHeight=640;maxWidth=550"
            rating={4}
          />
          <Product
            className="items"
            id="943322184"
            title="Dyson - V8 Animal Cord-Free Stick Vacuum - Iron "
            price={399.99}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5712/5712666_sd.jpg;maxHeight=640;maxWidth=550"
            rating={5}
          />
        </div>
        <div class="home__row">
          <Product
            className="items"
            id="7615621"
            title="LG - 2.1-Channel 300W Soundbar System with 6 inch Subwoofer - Black "
            price={179.99}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6355/6355625_sd.jpg;maxHeight=640;maxWidth=550"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

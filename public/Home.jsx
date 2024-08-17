import React from "react";
import './Home.css';

import { Link } from "react-router-dom";
import f1 from './images/features/f1.png'
import f2 from './images/features/f2.png'
import f3 from './images/features/f3.png'
import f4 from './images/features/f4.png'
import pro1 from './images/Featured products/pro1.jpg'
import pro2 from './images/Featured products/pro2.jpg'
import pro3 from './images/Featured products/pro3.jpg'
import pro4 from './images/Featured products/pro4.jpg'
import pro5 from './images/Featured products/pro5.jpg'
import pro6 from './images/Featured products/pro6.jpg'
import pro7 from './images/Featured products/pro7.jpg'
import pro8 from './images/Featured products/pro8.jpg'
import f6 from './images/features/f6.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
const Home=()=>{
  return(
    <>
    <div className="Hero">
      <h4>If You Can't Make it ..Buy It!</h4>
      <h2>Offers with</h2>
      <h1>50%off</h1>
      <p>Grab your coupons</p>
   <Link to = '/Products'>
      <button>Shop Now</button>
      </Link>
    </div>
    <div id="Feature" className="section-p1">
      <div className="feature-box">
        <img src={f1}></img>
        <h6>Free Shipping</h6>
      </div>
      <div className="feature-box">
        <img src={f2}></img>
        <h6>Fast Delivery</h6>
      </div>
      <div className="feature-box">
        <img src={f3}></img>
        <h6>Save Money</h6>
      </div>
      <div className="feature-box">
        <img src={f4}></img>
        <h6>Promotions</h6>
      </div>
      <div className="feature-box">
        <img src={f6}></img>
        <h6>24/7 Support</h6>
      </div>
    </div>

    <div id="product1" className="section-p1">
      <h2>Featured collections</h2>
      <p>summer colllection</p>
      <div className="pro-container">
        <div className="pro">
          <img src={pro1}></img>
          <div class="des">
            <span>Island vibes</span>
            <h5>Short Sleeve Hawaiia Shirt</h5>
            <div class='star'>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>$12</h4>
          <a href="#">< i className="cart"><FontAwesomeIcon icon={faShoppingCart} /></i></a>
        </div>      
        </div>

        <div className="pro">
          <img src={pro2}></img>
          <div class="des">
            <span>Boho Chic</span>
            <h5>Floral Maxi Dress</h5>
            <div class='star'>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>$67</h4>
          <a href="#">< i className="cart"><FontAwesomeIcon icon={faShoppingCart} /></i></a>
        </div>      
        </div>

        <div className="pro">
          <img src={pro3}></img>
          <div class="des">
            <span>Urban edge</span>
            <h5>Graphic Tee</h5>
            <div class='star'>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>$50</h4>
          <a href="#">< i className="cart"><FontAwesomeIcon icon={faShoppingCart} /></i></a>
        </div>      
        </div>

        <div className="pro">
          <img src={pro4}></img>
          <div class="des">
            <span>Tailored Elegance</span>
            <h5>Classic shirt</h5>
            <div class='star'>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>Cost</h4>
          <a href="#">< i className="cart"><FontAwesomeIcon icon={faShoppingCart} /></i></a>
        </div>      
        </div>

       < div className="pro">
          <img src={pro5}></img>
          <div class="des">
            <span>Glamour glow</span>
            <h5>Chiffon gown</h5>
            <div class='star'>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>$46</h4>
          <a href="#">< i className="cart"><FontAwesomeIcon icon={faShoppingCart} /></i></a>
        </div>      
        </div>

        <div className="pro">
          <img src={pro6}></img>
          <div class="des">
            <span>Urban Comfort</span>
            <h5>Silk Cami </h5>
            <div class='star'>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>$52</h4>
          <a href="#">< i className="cart"><FontAwesomeIcon icon={faShoppingCart} /></i></a>
        </div>      
        </div>

        <div className="pro">
          <img src={pro7}></img>
          <div class="des">
            <span>Garden Charm</span>
            <h5>Floral print tunic</h5>
            <div class='star'>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>$67</h4>
          <a href="#">< i className="cart"><FontAwesomeIcon icon={faShoppingCart} /></i></a>
        </div>      
        </div>

        <div className="pro">
          <img src={pro8}></img>
          <div class="des">
            <span>Rustic Roots</span>
            <h5>Short Sleeve</h5>
            <div class='star'>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>68</h4>
          <a href="/cart">< i className="cart"><FontAwesomeIcon icon={faShoppingCart} /></i></a>
        </div>      
        </div>
        
    </div>
    </div>

    <div id='banner' className="section-m1">
      <h4>Services Provided</h4>
      <h2>Upto <span>70% Off </span>All T-shirts &dresses</h2>
      <Link to ='/Shop'>
      <button className="normal">Explore More</button>
      </Link>
    </div>

    <div id="sm-banner" className="section-p1">
    <div className="banner-box">
      <h4>Crazy deals</h4>
      <h2>buy 1 get 2 free</h2>
      <span>best sale</span>
      <Link to ='/Popular'>
      <button className="white">Learn more</button>
      </Link>
    </div>
    <div className="banner-box banner-box2">
      <h4>New Season New Collections</h4>
      <h2>Upcoming collections</h2>
      <span>Grab your Favourites</span>
      <Link to ='/NewCollections'>
      <button className="white">Collections</button>
      </Link>
    </div>
    </div>
   
    
    
    </>
  )
}
export default Home;
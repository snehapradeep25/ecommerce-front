import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faClipboardList,faCashRegister,faStore,faPlus, faSignInAlt,faUserPlus, faAlignJustify} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div >
      <nav>
        <ul>
          <li className="hideOnMobile">
            <img src="" alt="" />{/* logo*/}
          </li>
          <li><a href="/Home">Home</a></li>
          <li>
            <a href="/Shop">Shop</a>
            <div className="dropdown-content">
              <a href="/mens">Men</a>
              <a href="/womens">Women</a>
              <a href="#Fitness">Fitness</a>
              <a href="/kids">Kids</a>
              {/*<a href="#accessories">Appliances</a>*/}
            </div>

          </li>
          <li><a href="/Cart"><FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '10px' }} /></a></li>
          <li><a href="/Contact">Contact</a></li>
          <li>
    <a>
              <div className="dropdown-content" style={{fontSize:'15px'}}>
              <a href="/cart">My Cart</a>
              <a href="/Orders">Orders</a>
              </div>
              </a>
           
          </li>
          <li className="menu-button" style={{marginRight:'34px',marginBottom:'100px'}}>
            <FontAwesomeIcon icon={faAlignJustify} onClick={toggleSidebar} />
          </li>
        </ul>
      </nav>
      <aside ref={sidebarRef} className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="/My_account">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
              My Account
            </a>
          </li>
          <li>
            <a href="/cart" >
              <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '10px' }} />
              My Cart
            </a>
          </li>
          <li>
            <a href="/Orders">
              <FontAwesomeIcon icon={faClipboardList} style={{ marginRight: '10px' }} />
              Orders
            </a>
          </li>
          <li>
            < a href="/Checkout">
            <FontAwesomeIcon icon={faCashRegister} style={{ marginRight: '10px' }} />
            Checkout
            </a>
          </li>
          
          <li>
            <a href="/Login">
            <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '10px' }} />
            Login
            </a>
          </li>
          <li>
            <a href="/Register">
            <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: '10px' }} />
            Register
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default App;
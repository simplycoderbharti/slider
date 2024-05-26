import React, { useState, useEffect } from 'react';
// import './font-awesome.css';
import './App.css';
import './Class.css'
import Slider from './component/megaMenu/Slider';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);
  const [currentMenuTitle, setCurrentMenuTitle] = useState('');
  const [subMenu, setSubMenu] = useState(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const showSubMenu = (hasChildren) => {
    const subMenuElement = hasChildren.querySelector('.sub-menu');
    setSubMenu(subMenuElement);
    setSubMenuActive(true);
    subMenuElement.style.animation = 'slideLeft 0.5s ease forwards';
    const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    setCurrentMenuTitle(menuTitle);
  };

  const hideSubMenu = () => {
    if (subMenu) {
      subMenu.style.animation = 'slideRight 0.5s ease forwards';
      setTimeout(() => {
        setSubMenuActive(false);
        setSubMenu(null);
      }, 300);
    }
    setCurrentMenuTitle('');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && menuActive) {
        toggleMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuActive]);

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="row v-center">
            <div className="header-item item-left">
              <div className="logo">
                <a href="#">MyStore</a>
              </div>
            </div>
            <div className="header-item item-center">
              <div className={`menu-overlay ${menuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
              <nav className={`menu ${menuActive ? 'active' : ''}`}>
                <div className="mobile-menu-head">
                  <div className="go-back" onClick={hideSubMenu}>
                    <i className="fa fa-angle-left"></i>
                  </div>
                  <div className="current-menu-title">{currentMenuTitle}</div>
                  <div className="mobile-menu-close" onClick={toggleMenu}>&times;</div>
                </div>
                <ul className="menu-main" onClick={(e) => {
                  if (!menuActive) return;
                  const hasChildren = e.target.closest('.menu-item-has-children');
                  if (hasChildren) showSubMenu(hasChildren);
                }}>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">New <i className="fa fa-angle-down"></i></a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item text-center">
                        <a href="#">
                          {/* <img src="img/p1.jpg" alt="new Product" /> */}
                          <h4 className="title">Product 1</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          {/* <img src="img/p2.jpg" alt="new Product" /> */}
                          <h4 className="title">Product 2</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          {/* <img src="img/p3.jpg" alt="new Product" /> */}
                          <h4 className="title">Product 3</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          {/* <img src="img/p4.jpg" alt="new Product" /> */}
                          <h4 className="title">Product 4</h4>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Shop <i className="fa fa-angle-down"></i></a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item">
                        <h4 className="title">Men's Fashion</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                        <h4 className="title">Beauty</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Women's Fashion</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                        <h4 className="title">Furniture</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Home, Kitchen</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <img src="img/shop1.jpg" alt="shop" />
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Blog <i className="fas fa-angle-down"></i></a>
                    <div className="sub-menu single-column-menu">
                      <ul>
                        <li><a href="#">Standard Layout</a></li>
                        <li><a href="#">Grid Layout</a></li>
                        <li><a href="#">single Post Layout</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Pages <i className="fas fa-angle-down"></i></a>
                    <div className="sub-menu single-column-menu">
                      <ul>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Faq</a></li>
                        <li><a href="#">404 Page</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-item item-right">
              <a href="#"><i className="fas fa-search"></i></a>
              <a href="#"><i className="far fa-heart"></i></a>
              <a href="#"><i className="fas fa-shopping-cart"></i></a>
              <div className="mobile-menu-trigger" onClick={toggleMenu}>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="banner-section"></section>
      <Slider/>
    </div>
  );
}

export default App;

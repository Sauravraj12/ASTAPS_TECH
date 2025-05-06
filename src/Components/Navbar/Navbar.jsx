// // import React, { useEffect, useState } from 'react'
// // import './Navbar.css'
// // import logo from '../../assets/logo.png'
// // import menu_icon from '../../assets/menu-icon.png'
// // import { Link } from 'react-scroll';


// // const Navbar = () => {

// //     const [sticky, setSticky] = useState(false);

// //     useEffect(()=>{
// //         window.addEventListener('scroll', ()=>{
// //             window.scrollY > 50 ? setSticky(true) : setSticky(false);
// //         })
// //     },[]);


// //     const [mobileMenu, setMobileMenu] = useState(false);
// //     const toggleMenu = ()=>{
// //       mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
// //     }

// //   return (
// //     <nav className={`container ${sticky? 'dark-nav' : ''}`}>
// //       <h1>ASTAPS</h1>
// //       {/* <img src={logo} alt="" className='logo' /> */}
// //       <ul className={mobileMenu?'':'hide-mobile-menu'}>
// //         <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
// //         <li><Link to='services' smooth={true} offset={-100} duration={500}>Service</Link></li>
// //         <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
// //         <li><Link to='services' smooth={true} offset={-260} duration={500}>Course</Link></li>
// //         <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
// //         <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
// //       </ul>
// //       <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
// //     </nav>
// //   )
// // }

// // export default Navbar

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(prev => !prev);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <h1>ASTAPS</h1>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/service">Service</Link></li>
      
        <li><Link to="/courses">Course</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/contact" className="btn">Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;


// import React, { useEffect, useState } from 'react';
// import './Navbar.css';
// import logo from '../../assets/logo.png';
// import menu_icon from '../../assets/menu-icon.png';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const [sticky, setSticky] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const location = useLocation();

//   // Scroll event to toggle sticky class
//   useEffect(() => {
//     const handleScroll = () => setSticky(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Toggle mobile menu visibility
//   const toggleMenu = () => setMobileMenu(!mobileMenu);

//   return (
//     <nav className={`navbar ${sticky ? 'navbar--sticky' : ''}`}>
//       <div className="navbar__logo">
//         <img src={logo} alt="ASTAPS" />
//         <h1>ASTAPS</h1>
//       </div>

//       <ul className={`navbar__links ${mobileMenu ? 'navbar__links--open' : ''}`}>
//         <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
//         <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Service</Link></li>
//         <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About us</Link></li>
//         <li><Link to="/courses" className={location.pathname === '/courses' ? 'active' : ''}>Course</Link></li>
//         <li><Link to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link></li>
//         <li><Link to="/contact" className={`btn ${location.pathname === '/contact' ? 'active' : ''}`}>Contact us</Link></li>
//       </ul>

//       <img src={menu_icon} alt="Menu" className="navbar__menu-icon" onClick={toggleMenu} />
//     </nav>
//   );
// };

// export default Navbar;

// // import { useState } from 'react'
// // import React, { Component } from 'react'
// // import styles  from './Header.module.css'
// // import { Link } from "react-router-dom";
// // import { Search, Bell, User, ChevronDown } from "lucide-react";
// // import logo from '../../assets/Image/image/logo.png'


// // function Header() {

// //      const  {isSearchOpen, setIsSearchOpen} = useState(false);
// //   const [isProfileOpen, setIsProfileOpen] = useState(false);
// //   return (
// //     <header className={styles.header} >
// //       <div className={styles.container}>
// //             {/* logo */}
// //          <img  className={styles.logo} src={logo}alt="" />


// //             {/* navigation links */}
// //    <nav className={styles.nav}>
// //     <Link  className={styles.navLink} href="" >Home</Link>
// //     <Link  className={styles.navLink} href="" >Tv Shows</Link>
// //     <Link  className={styles.navLink} href="" >Movies</Link>
// //     <Link  className={styles.navLink} href="" >New & Popular</Link>
// //     <Link   className={styles.navLink}href="" >My List</Link>
// //     <Link  className={styles.navLink} href="" >Browse by Language</Link>
// //    </nav>


// //             {/* right side section */}
// //     <div className={styles.rightSection}>
      
      
// //       {/* Search */}
       
// //       <div className={styles.searchContainer}>
// //          <button 
// //          onClick ={() => setIsSearchOpen(!isSearchOpen)}
// //          className={styles.searchButton}>
// //             <Search size={20} />
// //          </button>
 
// //           {
// //             isSearchOpen && (
// //             <input type="text" placeholder ="movie title" className={styles.searchInput} />
// //             )
// //           }

// //       </div>
      
// //       {/* Notification */}
// //       <button className={styles.iconButton}>
// //          {/* notification icon */}


// //        <Bell/>  
// //        <span className={styles.notificationBadge}>4</span>
// //        </button>



// //       {/* Profile */}
// //       <div className={styles.profileContainer}></div>
// //         <button 
// //         onClick={() => setIsProfileOpen(!isProfileOpen)}
// //         className={styles.profileButton}>
// //           {/* user icon */}
// //           <div className={styles.userIcon}>
            
// //             <User size={20}/>
// //           </div>

// //           <ChevronDown size={20}/> 
// //         </button>

// //         {
// //           isProfileOpen && (
// //              <div>
// //                <Link>Account</Link>
// //                <Link>help center</Link>
// //                <Button>Sign out </Button>
// //              </div>


// //           )
        
          
// //         }
// //       <div/>
// //     <div/>       
// //         <div/>
        
// //       <header/>
// //     )
  
// // }
 

 
// // export default Header







// import { useEffect, useState } from 'react'
// import styles from './Header.module.css'
// import { Link } from "react-router-dom";
// import { Search, Bell, User, ChevronDown } from "lucide-react";
// import logo from '../../assets/Image/image/logo.png'

// function Header() {

//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
      
//    // for blur

//    const [isScrolled, setIsScrolled] = useState(false);
//       useEffect(() => {
//         const [isSearchOpen, setIsSearchOpen] = useState(false);
// const [isProfileOpen, setIsProfileOpen] = useState(false);
// const [isScrolled, setIsScrolled] = useState(false);
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//       }, [])

//       useEffect(() => {
//   const handleScroll = () => {
//     setIsScrolled(window.scrollY > 50);
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);
//   return (
//     <header className={(`${styles.header} ${isScrolled ? styles.scrolled : ''}`)}>
//       <div className={styles.container}>

//         {/* Logo */}
//         <img
//           className={styles.logo}
//           src={logo}
//           alt=""
//         />

//         {/* Navigation Links */}
//         <nav className={styles.nav}>
//           <Link className={styles.navLink} to="/">Home</Link>
//           <Link className={styles.navLink} to="/tvshows">TV Shows</Link>
//           <Link className={styles.navLink} to="/movies">Movies</Link>
//           <Link className={styles.navLink} to="/new">New & Popular</Link>
//           <Link className={styles.navLink} to="/mylist">My List</Link>
//           <Link className={styles.navLink} to="/language">Browse by Language</Link>
//         </nav>

//         {/* Right Side Section */}
//         <div className={styles.rightSection}>

//           {/* Search */}
//           <div className={styles.searchContainer}>
//             <button
//               onClick={() => setIsSearchOpen(!isSearchOpen)}
//               className={styles.searchButton}
//             >
//               <Search size={20} />
//             </button>

//             {isSearchOpen && (
//               <input
//                 type="text"
//                 placeholder="Movie title"
//                 className={styles.searchInput}
//               />
//             )}
//           </div>

//           {/* Notification */}
//           <button className={styles.iconButton}>
//             <Bell size={20} />
//             <span className={styles.notificationBadge}>4</span>
//           </button>

//           {/* Profile */}
//           <div className={styles.profileContainer}>

//             <button
//               onClick={() => setIsProfileOpen(!isProfileOpen)}
//               className={styles.profileButton}
//             >
//               <div className={styles.profileAvatar}>
//                 <User size={20} />
//               </div>

//               <ChevronDown size={20} />
//             </button>

//             {isProfileOpen && (
//               <div className={styles.profileMenu}>
//                 <Link className={styles.profileMenuItem}>Account</Link>
//                 <Link className={styles.profileMenuItem}>Help Center</Link>
//                 <hr className={styles.profileMenuDivider} />
//                 <button className={styles.profileMenuItem}>Sign Out</button>
//               </div>
//             )}

//           </div>

//         </div>

//       </div>
//     </header>
//   )
// }

// export default Header


import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import logo from '../../assets/Image/image/logo.png';

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // scroll effect (blur / background change)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // run once in case page already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>

        {/* Logo */}
        <img
          className={styles.logo}
          src={logo}
          alt="Logo"
        />

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/">Home</Link>
          <Link className={styles.navLink} to="/tvshows">TV Shows</Link>
          <Link className={styles.navLink} to="/movies">Movies</Link>
          <Link className={styles.navLink} to="/new">New & Popular</Link>
          <Link className={styles.navLink} to="/mylist">My List</Link>
          <Link className={styles.navLink} to="/language">Browse by Language</Link>
        </nav>

        {/* Right Side Section */}
        <div className={styles.rightSection}>

          {/* Search */}
          <div className={styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(prev => !prev)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>

            {isSearchOpen && (
              <input
                type="text"
                placeholder="Movie title"
                className={styles.searchInput}
              />
            )}
          </div>

          {/* Notification */}
          <button className={styles.iconButton}>
            <Bell size={20} />
            <span className={styles.notificationBadge}>4</span>
          </button>

          {/* Profile */}
          <div className={styles.profileContainer}>

            <button
              onClick={() => setIsProfileOpen(prev => !prev)}
              className={styles.profileButton}
            >
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>

              <ChevronDown size={20} />
            </button>

            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link className={styles.profileMenuItem} to="/account">Account</Link>
                <Link className={styles.profileMenuItem} to="/help">Help Center</Link>
                <hr className={styles.profileMenuDivider} />
                <button className={styles.profileMenuItem}>Sign Out</button>
              </div>
            )}

          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;
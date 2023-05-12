import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";


import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  const navigate=useNavigate()
  function   navigateToHome(){
    navigate("/home")


  }
  return (
    <>
      <header class={styles.header}>
        <div className={styles.braName}>
          {/* <div>
            <h4 className={styles.compantName}>Abhyaz</h4>
          </div> */}
          <div className={styles.companyLogo}>
          <a href="#"> <img onClick={navigateToHome}src={require("../../Images/Abhyaz.logo.jpg")}></img></a> 
          </div>
        </div>

        <nav className={styles.menuItemsContainer}>
          <ul >
            <li><a href="#"> About Us</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#"><button>Contact us</button></a></li>
          </ul>
        </nav>

      
      </header>
    </>
  );
}

export default Header;

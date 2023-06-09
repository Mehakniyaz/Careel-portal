import styles from "./footer.module.css";
import '@fortawesome/fontawesome-free/css/all.css'
function Footer() {
  const copyright = String.fromCharCode(169);
  return (
    <div className={styles.footer}>

        <div>
        <p>{copyright} Abhyaz</p>
        </div>
      
      <div>
      <a href="https://github.com/Mehakniyaz" target="_blank">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/mehak-niyaz-84a533220/" target="_blank">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="mailto:mehakniyaz@gmail.com" target="_blank">
        <i className="fas fa-envelope"></i>
      </a>
      </div>
    </div>
  );
}

export default Footer;
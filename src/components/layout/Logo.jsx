//Hooks
import { Link } from "react-router-dom";

//Styles
import styles from "./Logo.module.css";

function Logo() {
   return (
      <Link to="/" className={styles.logo}>
         <span>NETFLIX</span>
      </Link>
   );
}
export default Logo;

import styles from "./card.module.css"
import { useNavigate } from "react-router-dom";

function Card(props) {

    const navigate = useNavigate();
    const navigateToPDP = () => {

        navigate(`/openings/form/${props.title}`);
      };

      const navigateToDesc = () => {

        navigate(`/openings/${props.id}`);
      };





  return (

  
    <>
      <div className={styles.container}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.btnContainer}>
        <button className={styles.btnApply} onClick={navigateToDesc}>View More</button>

       
        </div>
      </div>
    </>
  );
}

export default Card

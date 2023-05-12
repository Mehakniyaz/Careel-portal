

import styles from "./HomePage.module.css"
import { useNavigate } from "react-router-dom";
function Home() {
const navigate=useNavigate()
    const openingHandler=()=>{
        navigate(`/openings`)

    }
  return (
    <>
      <div className={styles.container}>
        <section>
          <h1>
            JOIN OUR TEAM AT
          </h1>
          <span>ABHYAZ</span>
          <p className={styles.desc}> Work at the most dynamicand successful agency</p>
          <div className={styles.btnContainer}>
            <button  onClick={openingHandler}>View Openings</button>
          </div>
         
        </section>
        <section className={styles.section2}>
            <div>
        <img src={require("../../Images/hring.jpg")} />
        </div>
        </section>
      </div>
    </>
  );
}
export default Home
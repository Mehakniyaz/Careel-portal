import styles from "./carddescription.module.css"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function CardDescription(){
    const navigate = useNavigate();
    const { jobId } = useParams();
    console.log(jobId)
    const jobDetails = useSelector(state => state.jobStore.post.jobs[jobId]);
    
    const navigateToPDP = () => {

        navigate(`/openings/form/${jobDetails["title"]}`);
      };
    return(<>
  

    
     <div className={styles.container}>
        { console.log(jobDetails)}
        <div className={styles.title}>{jobDetails.title}</div>
        <div className={styles.description}>Details:{jobDetails["description"]}</div>
         <p>Type:{jobDetails.type}</p>
         <p>Location:{jobDetails.location}</p>
         <p>Skills:{jobDetails.skills}</p>
         <p>{`Salary: ${jobDetails.salaryRange["from"]} to ${jobDetails.salaryRange["to"]} ${jobDetails.salaryRange["currency"]}  `}</p>
         <p>{`Perks:${jobDetails.perks}`}</p>
        <div className={styles.btnContainer}>


          <button className={styles.btnApply} onClick={navigateToPDP}>Apply Now</button>
        </div>
      </div>
      {console.log(jobDetails)}
    </>
    
    
    
    
    
    )



}

export default CardDescription
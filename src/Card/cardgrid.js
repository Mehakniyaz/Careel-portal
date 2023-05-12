import { useSelector } from "react-redux";
import styles from "./cardgrid.module.css"
import Card from "./card";

function CardGrid(props) {
  
    const data1 = useSelector((state) => state.jobStore.post.jobs)
 
  const cardData = !data1 ? (
    <div>Loading...</div>
  ) : (

    <div className={styles.mainContainer}>
    <div className={styles.container}>
      {data1.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            position={item.position}
          ></Card>
        );
      })}
    </div>
    </div>
  );

  return <div>{cardData}</div>;
}

export default CardGrid;

import styles from "../styles/TodoCard.module.css";
import {useState} from "react";

export default function TodoCard(props) {
  const [isToggled, hasToggled] = useState(true);

  const Toggle = () => {
    if (isToggled) {
      hasToggled(false);
      console.log(isToggled);
    } else {
      hasToggled(true);
      console.log(isToggled);
    }
  };

  const gtDate = (Dt) => {
    const Months = [
      "Jan",
      "Fev",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const Mon = Dt.getMonth();
    const Day = Dt.getDate().toString();
    const newDate = `~Added on ${Months[Mon]} ${Day}`;
    return newDate;
  };

  return (
    <div className={isToggled ? styles.cardContainer : (`${styles.cardContainer} ${styles.active}`)}>
      <div className={styles.textContainer}>
        <span>{props.taskTodo}</span>
        <span>{gtDate(new Date())}</span>
      </div>
      <div className={styles.commandButtons}>
        <button onClick={() => hasToggled(!isToggled)}>
          <img src="/check-icon.svg"></img>
        </button>
        <button onClick={props.deleteTodo}>
          <img src="/trash-can.svg"></img>
        </button>
      </div>
    </div>
  );
}

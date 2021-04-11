import styles from '../styles/TaskCard.css'

export default function TaskCard(props) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.textBox}>
                <span>{props.taskToDo}</span>
                <span>{props.addedDate}</span>
            </div>
            <div className={styles.commandButtons}>
                <button onClick={props.altTask}>
                    <img src="/paper-pencil.svg"></img>
                </button>
                <button onClick={props.delTask}>
                    <img src="/trash-can.svg"></img>
                </button>
            </div>
        </div>
    );
};
import styles from '../styles/TaskBar.module.css'


export default function TaskBar (props) {
    return (
    <div className={styles.taskBarAdd}>
        <input placeholder="Adicionar tarefa..."></input>
        <button onClick={props.AddTask}>
            <img src="/add-icon.svg"></img>
        </button>
    </div>
    );
};
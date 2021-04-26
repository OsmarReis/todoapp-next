import styles from "../styles/TodoForm.module.css";

export default function TodoForm(props) {
  return (
    <form id = "todo-Form" key="todo-Form" className={styles.addTodoForm} onSubmit={props.onSubmit}>
          <input
            type="text"
            placeholder="Add a to do..."
            value={props.value}
            onChange={props.onChange}
            ref={props.inpRef}
          ></input>
          <button>
            <img src="/add-icon.svg" alt="Add To Do"></img>
          </button>    
    </form>
  );
}

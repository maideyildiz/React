import styles from './style.module.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { v4 as uuidv4 } from 'uuid';
import TodoList from '../TodoList/Index';

function TodoInput({addTodo,todos, todo, setForm, initialVals}){
    let num=uuidv4();

    const onChangeInput=(e)=>{
        setForm({...todo,id:num, [e.target.name]:e.target.value});
    };
    const buttonClick=(e)=>{
        if(todo.task==="" ){
            return false;
        }
        addTodo([...todos,todo]);
        setForm(initialVals);
    };

    return (
        <>
        <div className={styles.todo}>
            <label>Enter your task : </label>&nbsp;&nbsp;
            <input 
            type="text" 
            placeholder='Add a todo'
            name="task"
            value={todo.task}
            onChange={onChangeInput}
            />&nbsp;&nbsp;
            <label>Give a deadline : </label>&nbsp;&nbsp;
            <input 
            type="date"
            name="deadline"
            value={todo.deadline} 
            onChange={onChangeInput}
            />

            <AddCircleIcon onClick={buttonClick} 
            className={styles.todoButton}></AddCircleIcon>
        </div>
        <TodoList todos={todos} todo={todo} addTodo={addTodo} setForm={setForm} />
        </>
    );
}

export default TodoInput;
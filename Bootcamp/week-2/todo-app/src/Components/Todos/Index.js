import { useState,useEffect} from 'react';
import TodoInput from './TodoInput/Index'


const initialVals={
    id:"",
    task:"",
    deadline:"",
    isDone:false
};

function Todos() {
    const [todo, setForm] = useState(initialVals);
    const [todos,setTodos]=useState([]);

    const saveToLocal=()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
    };
    const getFromLocal=()=>{
        if(localStorage.getItem("todos")===null){
            localStorage.setItem("todos",JSON.stringify([]));
        }else{
            let localTodos=JSON.parse(localStorage.getItem("todos"))
            setTodos(localTodos);
        }
    }
    
    useEffect(()=>{
        getFromLocal();
    },[]);

    useEffect(saveToLocal, [todos])


    

    return (
        <>
            <header>TODO APP</header>
            <TodoInput addTodo={setTodos} todos={todos} todo={todo} setForm={setForm} initialVals={initialVals}/>
        </>
    )
}

export default Todos

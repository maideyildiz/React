import React, { useState} from 'react';
import Moment from 'react-moment';
import styles from './style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import Modal from 'react-bootstrap/Modal';
import DoneIcon from '@mui/icons-material/Done';


function TodoList({todos,addTodo}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return (
        <>
            <ul>
                {todos.map((todo)=>{
                 let days=<Moment fromNow>{todo.deadline}</Moment>
                 if(days.props.children===""){
                     days="";
                 }
                 const deleteTodo=()=>{
                    addTodo(todos.filter((el) => el.id !== todo.id))
                };

                const doneTodo=()=>{
                  addTodo(todos.map((index)=>{
                    if(index.id===todo.id){
                      return{
                        ...index, isDone: !index.isDone,
                      };
                    }
                    return index;
                  })
                  );
                };

                const editTaskTodo=(e)=>{
                  addTodo(todos.map((index)=>{
                    if(index.id===todo.id){
                      return{
                        ...index, task: e.target.value, isDone:false,
                      };
                    }
                    return index;
                  })
                  );
                };

                const editDateTodo=(e)=>{
                  addTodo(todos.map((index)=>{
                    if(index.id===todo.id){
                      return{
                        ...index, deadline:e.target.value,isDone:false,
                      };
                    }
                    return index;
                  })
                  );
                };


                const completedTodo = todo.isDone ? styles.doneTodo : '';
                 return <div  key={todo.id}  className={` ${styles.todoList}  ${completedTodo}`} >
                     <li>{todo.task} <div className={styles.liButtons}> {days} 
                     <CheckCircleIcon className={styles.doneButton} onClick={doneTodo}></CheckCircleIcon>
                     <EditIcon className={styles.editButton} onClick={handleShow} > </EditIcon>
                     <DeleteIcon 
                     sx={{ color: red[500] }} onClick={deleteTodo}>
                       </DeleteIcon> </div>
                       </li>
                       <Modal show={show} onHide={handleClose} className="cusModal" >
        <Modal.Header closeButton>
          <Modal.Title >
          <input 
            type="text" 
            name="task"
            value={todo.task}
            onChange={editTaskTodo}
            className={styles.editInput}
            />
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input 
            type="date"
            name="deadline"
            value={todo.deadline} 
            onChange={editDateTodo}
            className={styles.editInput}
            />
        </Modal.Body>
        <Modal.Footer>
        <DoneIcon onClick={handleClose} 
           className={styles.saveEdit}></DoneIcon>
          
        </Modal.Footer>
      </Modal>
                               </div>
                              })}
                              </ul>
                              </>
                              );
                            }

export default TodoList

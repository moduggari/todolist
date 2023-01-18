import React, { useState } from 'react';
import styles from './TodoList.module.css';
import { v4 as uuidv4 } from 'uuid';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';


const TodoList = ({filter}) => {
    const [todos, setTodos] = useState([
        {id:uuidv4(), text : '장보기', status : 'active'},
        {id:uuidv4(), text : '학원수강', status : 'active'},
    ]);

    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    }

    const handleUpdate = (updated) => {
        setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    }

    const handleDelete = (deleted) => {
        setTodos(todos.filter((t)=>(t.id !== deleted.id)));
    }

    const filtered = getFilteredItems(todos, filter);

    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {
                    filtered.map((item) => <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />)
                }
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}

function getFilteredItems(todos, filter) {
    if(filter === 'all') {
        return todos;
    }
    return todos.filter(todo => todo.status === filter);
}

export default TodoList
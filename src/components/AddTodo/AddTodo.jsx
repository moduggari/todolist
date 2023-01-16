import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const AddTodo = ({onAdd}) => {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length === 0) {
            setText('');
            return;
        }
        onAdd({id: uuidv4(), text, status : 'active'});
        setText('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='text' id='text' value={text} onChange={handleChange} />
            <button>추가하기</button>
        </form>
    );
}

export default AddTodo
import React, { useState } from 'react'
import TodoList from './TodoList';
import './AddItem.css';

function AddItem() {

    const [list, setList] = useState([
        { text: "Dia", isCompleat: true }
    ]);
    const [item, setItem] = useState('');

    const itemAdd = (e) => {
        e.preventDefault();
        if (!item) return;
        addTodo(item);
        setItem("");
    }

    const addTodo = (text) => {
        const newTodo = [...list, { text, isCompleat: false }]
        setList(newTodo);
    }


    return (
        <div className="addItem">
            <h1>My Todo List</h1>
            <form>
                <div className="addItem__input">
                    <input type="text" placeholder="Enter here" value={item} onChange={e => setItem(e.target.value)} />
                    <button type="submit" onClick={itemAdd}>Add</button>
                </div>
            </form>

            <div className="addItem__todoList">
                <TodoList
                    todoList={list}
                />
            </div>
        </div>
    )
}

export default AddItem

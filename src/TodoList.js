import React, { useState } from 'react';
import './TodoList.css';

function TodoList({ todoList }) {

    return (
        <div className="todolist">
            {
                todoList.map((item, index) => (
                    < div className="todoList__content" key={index}>
                        <div
                            className="todolist__text"
                            style={{ textDecoration: item.isCompleat ? "line-through" : "" }}
                        >
                            {index + 1}. {item.text}
                        </div>

                        <div className="todolist__button">

                            <i class="fa fa-2x fa-check-square" aria-hidden="true"></i>
                            <i class="fa fa-2x fa-trash" aria-hidden="true"></i>

                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default TodoList

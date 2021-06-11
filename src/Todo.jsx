import React from 'react';
import TodoList from './TodoList'
import TodoInput from './TodoInput'

function Todo () {
    return (
        <div className='p-4 text-2xl text-white border-b-2'>
            <TodoList />
        </div>
    )
}

export default Todo
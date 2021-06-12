import React, { useState } from 'react';

    
    const Todo = () => {
    const initialEvents = localStorage.getItem('todo')
    const [todo, setTodo] = useState(initialEvents ? JSON.parse(initialEvents) : [])
    const [newItem, setNewItem] = useState('')

    const onChange = (event) => {
        setNewItem(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newTodo = [
            ...todo,
            newItem
        ]
        localStorage.setItem('todo', JSON.stringify(newTodo))
        setTodo(newTodo)
        setNewItem('')
    }

    // const strikethrough = ( index) => {
    //     console.log(index)
    //     const item = document.getElementById(`item${index}`)
    //     item.classList.toggle('strikethrough')
    // }

    const deleteItem = (index) => {
        const newTodo = todo.filter((item, origIndex) => origIndex !== index)
        localStorage.setItem('todo', JSON.stringify(newTodo))
        setTodo(newTodo)
    }

    return (
        <div className='p-4 text-2xl  border-b-2'>
       
            <ul>
                {todo.length > 0 && todo.map((item, index) => {
                    return (
                        <div key={index} >
                            <li id={index}>
                            <input type='checkbox'/>
                            { item }
                            <button onClick={() => deleteItem(index)}>Delete</button>
                            </li>
                        </div>
                    )
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <input 
                type='text'
                name='newItem'
            
                onChange={onChange}
                />
                <button type="submit"   
                > Add to List
                </button>
            </form>
                
        </div>
    ) 
}

export default Todo
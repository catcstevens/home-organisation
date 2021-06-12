import React, { useState, useEffect} from 'react';

const Todo = () => {
    
        const [ value, setValue ] = useState( 
        localStorage.getItem('myValueInLocalStorage') || '')

        useEffect(() => {
            localStorage.setItem('myValueInLocalStorage', value)
        }, [value])

        const onChange = event => setValue(event.target.value)
        
        return (
            <div className='p-4 text-2xl text-white border-b-2'>
            <form>
            <input 
                name='done'
                type='checkbox' 
                value={value}
                // onChange={handleInput}
                />
                
                <span> Placeholder text </span>
                <input 
                type='text'
                name='newItem'
                value={value}
                onChange={onChange}
                />
                <input type="submit" 
                value="Submit"    
                />
            </form>
                
            </div>
        ) 
}

export default Todo
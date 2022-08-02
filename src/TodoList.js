import { useState, useEffect } from 'react';

function TodoList(props) {

    const { todos, addTodo } = props;

    const [ task, setTask ] = useState(null);

    useEffect(() => {
        console.log(task);
    },[task])
     
    return (
    <div className="todoListMain">
        <div className="header">
        <form onSubmit={(e) => addTodo(e, task)}>

            <input 
                type="text" 
                placeholder="Task" 
                name="task" 
                id="task" 
                value={task}
                onChange={(e) => setTask(e.target.value)} 
            />

            <button type="submit"> Add Task </button>
        </form>
        </div>

        <ul>
            {
                todos.map((todo,i) => { 
                    return <li key={i}>{todo}</li> 
                })
            }
        </ul>
    </div>
    )
}


export default TodoList
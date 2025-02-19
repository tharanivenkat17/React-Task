import React, { useState } from 'react'

function TodoList() {
    const [addList, setAddList] = useState([]);
    const [task, setTask] = useState("");
    const [check, setCheck] = useState({});
    // To handle the enter of current value
    function currentValue(event) {
        setTask(event.target.value)
    }
    // To add the items in the list
    function handleListItems() {
        if (task.trim()) {
            setAddList([...addList, task])
            setTask("");
        }
    }
    // check box to check whether the task is completed or not
    function handleCheck(event){
        setCheck(event.target.value)
    }
    // remove the task which is not needed
    function handleRemove(index) {
        const afterRemove = [...addList]
        afterRemove.splice(index, 1)
        setAddList(afterRemove)
    }
    return (
        <div>
            <h3>TodoList</h3>
            <div>
                <input
                    type="text"
                    placeholder='Enter Task'
                    value={task}
                    onChange={currentValue}
                />
                <button onClick={handleListItems}> Add</button>
            </div>
            <ul>
                {addList.map((tasks, index) => (
                    <li key={index}>
                        <input type="checkbox" value={check} onChange={handleCheck}/>
                        {tasks} &nbsp;
                        <button onClick={() => handleRemove(index)}>Remove</button>
                        {handleCheck && <p>{handleCheck ? "Completed" : "Not Yet Completed"}</p>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
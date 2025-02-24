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
    function handleCheck(index){
        setCheck(prevState=>({
            ...prevState, [index]: !prevState[index],
        }))
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
                    style={{padding:"2px 4px 4px 4px", border: "solid"}}
                /> &nbsp;
                <button 
                    onClick={handleListItems}
                    style={{backgroundColor:"lightblue", padding: "3px 5px 3px 5px"}}
                > Add Task</button>
            </div>
            <ul>
                {addList.map((tasks, index) => (
                    <li key={index}>
                        <input 
                            type="checkbox" 
                            checked={check[index]} 
                            onChange={() => handleCheck(index)}
                        />
                        <span 
                            style={{ textDecoration: check[index] ? 'line-through' : 'none' }}
                        > {tasks} </span> &nbsp;
                        <button 
                            onClick={() => handleRemove(index)}
                            style={{ padding: '2px 6px', cursor: 'pointer',backgroundColor: '#f44336', color: 'white' }}
                        >Remove</button> &nbsp;
                        {check[index] && 
                            <span style={{color: "white", backgroundColor: "green", padding: "2px 6px 4px 6px", fontSize: "18px" }}>
                                {check[index] ? "Completed" : ""}
                            </span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList

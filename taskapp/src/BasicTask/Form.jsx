import React, { useState } from "react";

function Form() {
    const [name, setName] = useState("")
    const [display, setDisplay] = useState("")
    function changeName(event) {
        setName(event.target.value)
    }
    function handleSubmit(event) {
        setDisplay(name)
        event.preventDefault();
    }
    return (
        <div>
            <h3>Form</h3>
            <form>
                <label> Name: </label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={changeName}
                /> &nbsp;
                <button onClick={handleSubmit}> Display </button>
                <p>{display}</p>
            </form>
        </div>
    )
}
export default Form
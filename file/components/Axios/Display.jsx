import React, { useEffect, useState } from "react";
import axios from "axios";

function Display() {
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:5500/Data`)
        .then(response => {
            setData(response.data) //  setData function - storing the fetched data in the component's state
        })
        .catch(error => {
            setError(error.message) //  setError - error message to store it in the component's state
        })
     }, [])
     
     if(error)
        return <div>{error}</div>

    return (
        <div>
            <table border={"solid black"}>
                <thead>
                    <tr>
                        <td>S.No</td>
                        <td>Data</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((datum) => {
                        return(
                            <tr key={datum.id}>
                                <td>{datum.id}</td>
                                <td>{datum.data}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Display
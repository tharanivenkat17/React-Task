import React, { useEffect, useState } from "react";
import axios from "axios";

function Display() {
    const [data, setData] = useState([])
    const [userData, setUserData] = useState([])
    const [error, setError] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:5500/Data`)
            .then(response => {
                setData(response.data) //  setData function - storing the fetched data in the component's state
            })
            .catch(error => {
                setError(error.message) //  setError - error message to store it in the component's state
            })

        axios.get(`http://localhost:5500/UserData`)
            .then(response => {
                setUserData(response.userData) //  setData function - storing the fetched data in the component's state
            })
            .catch(error => {
                setError(error.message) //  setError - error message to store it in the component's state
            })
    },[])
    if (error) {
        return <div>Error: {error}</div>; // Display an error if there's one
    }

    return (
        <div>
            <div style={{ display: "flex" }}>
                <table border={"solid black"}>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Data</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((datum) => (
                            <tr key={datum.id}>
                                <td>{datum.id}</td>
                                <td>{datum.data}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <br />
            <div style={{ display: "flex" }}>
                <table border={"solid black"}>
                    <thead>
                        <tr>
                            <td>User Id</td>
                            <td>Name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {userData && userData.map((value) => {
                            return (
                                <tr key={value.id}>
                                    <td>{value.userid}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
export default Display
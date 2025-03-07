import React, { useEffect, useState } from "react";
import './FetchDataAPI.css';

function FetchDataAPI() {
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const api = "https://jsonplaceholder.typicode.com/users"
        fetch(api)
            .then(response => {    // then() - used to handle response once the promise resolves successfully
                if (!response.ok) {
                    throw new Error("Error in fetching the data")
                }
                return response.json() // if fetch successful, it will return json response
            })
            .then(data => {
                setData(data) //  setData function - storing the fetched data in the component's state
            })
            .catch(error => {
                setError(error.message) //  setError - error message to store it in the component's state
            })
    }, [])

    if (error)
        return <div>{error}</div>

    return (
        <div>
            <h3>Fetch Data from API</h3>
            <table border={"solid black"}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>User Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Website</td>
                        <td>Company</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((datum) => {
                        return (
                            <tr key={datum.id}>
                                <td>{datum.name}</td>
                                <td>{datum.username}</td>
                                <td>{datum.email}</td>
                                <td>{datum.phone}</td>
                                <td>{datum.website}</td>
                                <td>{datum.company.name}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}
export default FetchDataAPI
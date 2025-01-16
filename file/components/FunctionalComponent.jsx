import React from 'react'

export default function FunctionalComponent() {
  return (
    <div>
        <h1>Function Component</h1>
            <table border="4" class="table">
                <tr>
                    <th>data Id</th>
                    <th>data Name</th>
                    <th>Phone Number</th>
                    <th>Salary</th>
                    <th>Location</th>
                </tr>
                {
                    props.details.map((data) =>(
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td>{data.salary}</td>
                            <td>{data.location}</td>
                        </tr>
                    ))
                }
            </table>
    </div>
  )
}

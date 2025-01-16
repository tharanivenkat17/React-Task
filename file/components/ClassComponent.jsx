import React, { Component } from 'react'

export class ClassComponent extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <div>
        <h1>Class Component</h1>
                <table border="4" class="table">
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Phone Number</th>
                        <th>Salary</th>
                        <th>Location</th>
                    </tr>
                    {
                        this.props.details.map((data) => (
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
}

export default ClassComponent
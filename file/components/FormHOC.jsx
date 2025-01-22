import React from 'react';
import FormValidationHOC from './FormValidationHOC';

const FormHOC = ({ formData, errors, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td><label>Name:</label></td>
                        <td><input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={onChange}
                        /></td>
                        <td>{errors.name && <p>{errors.name}</p>}</td>
                    </tr>
                    <tr>
                        <td><label>Email:</label></td>
                        <td>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={onChange}
                            />
                        </td>
                        <td>{errors.email && <p>{errors.email}</p>}</td>
                    </tr>
                    <tr>
                        <td><label>Password:</label></td>
                        <td>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={onChange}
                            />
                        </td>
                        <td>{errors.password && <p>{errors.password}</p>}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button type="submit">Submit</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default FormValidationHOC(FormHOC);

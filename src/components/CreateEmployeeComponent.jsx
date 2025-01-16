import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const CreateEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const saveEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, email };
        console.log('employee =>', JSON.stringify(employee));

        EmployeeService.createEmployees(employee).then(() => {
            navigate('/employees');
        }).catch((err) => {
            navigate(`/error/${err.response.status}`)
        });
    };

    const cancel = () => {
        navigate('/employees');
    };

    return (
        <div>
            <div className='container'>
                <div className='row' style={{ margin: '15px 0' }}>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Add Employee</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>First Name:</label>
                                    <input
                                        placeholder='First Name'
                                        name='firstName'
                                        className='form-control'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Last Name:</label>
                                    <input
                                        placeholder='Last Name'
                                        name='lastName'
                                        className='form-control'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Email Address:</label>
                                    <input
                                        placeholder='Email Address'
                                        name='email'
                                        className='form-control'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <button className='btn btn-success' onClick={saveEmployee}>
                                    Save
                                </button>
                                <button
                                    className='btn btn-danger'
                                    onClick={cancel}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEmployeeComponent;

import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { handleAxiosError } from '../services/errorHandler';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        EmployeeService.getEmployees().then((res) => {
            setEmployees(res.data);
        }).catch((err) => {
            handleAxiosError(err, navigate);
        });
    }, [navigate]); // Выполняется только при монтировании компонента

    const addEmployee = () => {
        navigate('/add-employee');
    };

    const editEmployee = (id) => {
        navigate(`/update-employee/${id}`);
    };

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then((res) => {
            console.log(res.data);
            setEmployees(employees.filter(employee => employee.id !== id));
        }).catch((err) => {
            handleAxiosError(err, navigate);
        });
    };

    return (
        <div>
            <br />
            <h2 className="text-center">Employee List</h2>

            <div className="row">
                <button className="btn btn-primary col-md-2" 
                    onClick={addEmployee}>
                    Add Employee
                </button>
            </div>

            <br />

            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    <h2 className='opacity-50 fw-light'>Empty List</h2>
                                </td>
                            </tr>
                        ) : (
                            employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <button
                                            style={{ margin: '10px 10px 10px 0' }}
                                            onClick={() => editEmployee(employee.id)}
                                            className="btn btn-info"
                                        >
                                            Update
                                        </button>
                                        <button
                                            style={{ margin: '10px 0' }}
                                            onClick={() => deleteEmployee(employee.id)}
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListEmployeeComponent;

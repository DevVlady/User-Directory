import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import EmployeeContext from '../utils/employeeContext';


function Directory() {
    const [employee, setEmployee] = useState([]);
    const [emp, setEmp] = useState ({});
    const [empIndex, setEmpIndex] = useState(0);

    useEffect(() => {
        loadEmployees();
    }, []);

    function loadEmployees() {
        API.getEmployee()
        .then(employee => {
            setEmployee(employee);
            setEmp(employee[0]);
        });
    }

    return (
        <EmployeeContext.Provider value={{ emp, employee}}>
            <div>
                
            </div>
        </EmployeeContext.Provider>
    )
}

export default Directory;
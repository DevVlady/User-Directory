import React from 'react';

const EmployeeContext = React.createContext({
    image: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: ""
});

export default EmployeeContext;
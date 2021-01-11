import React from 'react';

const UserContext = React.createContext({
    image: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: ""
});

export default UserContext;
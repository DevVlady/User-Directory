import axios from 'axios';

// const employees = "";

export default {
    getEmployee: function() {
        return new Promise((resolve, reject) => {
            axios
                .get("https://randomuser.me/api/")
                .then(res => {
                    const employee = res.data;
                    const result = employee.map(emp => {
                        return {
                            image: emp.results.picture.thumbnail,
                            firstName: emp.results.name.first,
                            lastName: emp.results.name.last,
                            phone: emp.results.phone,
                            email: emp.results.email,
                            dob: emp.results.dob.date
                        };
                    });
                    resolve(result);
                })
                .catch(err => reject(err));
        });
    }
};
import React from 'react';
import './style.css';
// import EmployeeContext from '../../utils/employeeContext';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            search: "",
            sortDirection: 0,
        };
    }

    //Referenced activity 20-07
    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=25&nat=us").then((res) => {
            this.setState({ users: res.data.results });
        });
    }

    render() {
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );

    }
}

export default Table;
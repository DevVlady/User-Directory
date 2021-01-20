import React from 'react';
import './style.css';
import axios from 'axios';
import Search from '../Form/index'


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

    //Handle Change - Provides result for onclick
    handleInputChange = (event) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    //Used for Sorth Method
    sortByName() {
        if (this.state.sortDirection < 1) {
            this.setState({
                users: this.state.users.sort((a, b) =>
                    a.name.first > b.name.first ? 1 : -1
                ),
            });
            this.setState({ sortDirection: 1 });
        } else {
            this.setState({
                users: this.state.users.sort((a, b) =>
                    a.name.first < b.name.first ? 1 : -1
                ),
            });
            this.setState({ sortDirection: 0 });
        }
    }

    render() {
        return (
            <div>
                <Search search={this.state.search} handleInputChange={this.handleInputChange} />
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th onClick={() => this.sortByName()}>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users
                            .filter(
                                (user) =>
                                    user.name.first
                                        .toLowerCase()
                                        .includes(this.state.search.toLowerCase()) ||
                                    user.name.last
                                        .toLowerCase()
                                        .includes(this.state.search.toLowerCase())
                            )
                            .map((user) => (
                                <tr key={user.name}>
                                    <td>
                                        <img src={user.picture.thumbnail} alt=""></img>
                                    </td>
                                    <td>
                                        {user.name.first} {user.name.last}
                                    </td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>{user.dob.date}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;
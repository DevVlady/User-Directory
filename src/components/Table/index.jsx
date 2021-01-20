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
        const { classes } = this.props;
        return (
            <div>
                <Search search={this.state.search} handleInputChange={this.handleInputChange} />
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
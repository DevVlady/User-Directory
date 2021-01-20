import React from 'react';
import './style.css';

function Form(props) {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid-center">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" onChange={props.handleInputChange}/>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Form;
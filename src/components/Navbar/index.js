import React from 'react';
import './style.css';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Employee Directory</span>
                    <p>Click on the carrots below to filter directory by heading or use the search box below to narrow your results.</p>
                </div>
            </nav>
        </div>
    );
}
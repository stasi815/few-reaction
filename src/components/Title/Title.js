import React from 'react';
import { NavLink } from 'react-router-dom';
import './Title.css';

function Title() {
    return (
        <div className='Title'>
            <header>

                <h1>SFPOPOS</h1>
                <div className='Title-Subtitle'>
                    <p>San Francisco Privately Owned Public Open Spaces</p>
                </div>

                <div>
                    <NavLink className="nav-link" activeClassName="nav-link-active" exact to="/">List</NavLink>

                    <NavLink className="nav-link" activeClassName="nav-link-active" to="/about">About</NavLink>
                </div>

            </header>
        </div>
    )
}

export default Title
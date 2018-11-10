import React from 'react';
import logo from '../style/resources/img/notes.png';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <header>
            <nav>
                <div className="row">
                    <Link to="/">
                        <img src={logo} alt="Foodish" className="logo" />
                    </Link>
                    <div className="main-nav">
                        <Link className="btn-square" to="/posts/new">New Post</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
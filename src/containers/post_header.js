import React from 'react';
import logo from '../style/resources/img/notes.png'

export default (props) => {
    return (
        <header>
            <nav>
                <div className="row">
                    <img src={logo} alt="Foodish" className="logo" />
                    <div className="main-nav">
                        <a className="btn-square" href="/posts/new">New Post</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
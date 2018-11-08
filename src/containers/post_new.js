import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewPost } from '../actions/index'

class PostNew extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h2>Post New</h2>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addNewPost }, dispatch)
}

export default connect(null, mapDispatchToProps)(PostNew);

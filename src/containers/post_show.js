import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSinglePost } from '../actions/index';





class PostShow extends Component {

    componentDidMount() {
        const { params } = this.props.match.params;
        this.props.fetchSinglePost(297744);
    }
    render() {
        const { post } = this.props
        return (
            <div className="row">
                <h2>{post.title}</h2>
            </div>
        );
    }
}


function mapStateToProps({ post }) {
    return { post }
}
export default connect(mapStateToProps, { fetchSinglePost })(PostShow)

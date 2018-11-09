import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSinglePost } from '../actions/index';
import '../style/resources/css/show_post.css';
import { Link } from 'react-router-dom';





class PostShow extends Component {

    componentDidMount() {
        const { params } = this.props.match.params;
        this.props.fetchSinglePost(297744);
    }
    render() {
        const { post } = this.props
        return (
            <div className="row show-post">
                <div className="content">
                    <h2>{post.title}</h2>
                    <div className="categories box-scroll">
                        <a href="#" className="btn-squre-full">{post.categories}</a>
                    </div>
                    <div className="text">
                        <p>
                            {post.content}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps({ post }) {
    return { post }
}
export default connect(mapStateToProps, { fetchSinglePost })(PostShow)

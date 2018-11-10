import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSinglePost } from '../actions/index';
import '../style/resources/css/show_post.css';
import { Link } from 'react-router-dom';





class PostShow extends Component {

    componentDidMount() {
        const { params } = this.props.match;
        this.props.fetchSinglePost(params.id);
    }
    render() {

        const post = this.props.post.filter((data) => {
            return data.id.toString() === this.props.match.params.id.toString()
        })[0];

        if (!post) {
            return (<h2>Loading...</h2>)
        }
        return (
            <div className="row show-post">
                <div className="content">
                    <h2>{post.title}</h2>
                    <div className="text">
                        <p>
                            {post.content}
                        </p>
                    </div>
                    <div className="categories box-scroll">
                        <a href="#" className="btn-squre-full">{post.categories}</a>
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

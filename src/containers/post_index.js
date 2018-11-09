import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';



class PostIndex extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    makePostList(post) {
        if (!post || !post.title) {
            return null;
        }
        return (

            <div className="col span-1-of-2 card" key={post.id}>
                <div className="top">
                    <p className="title">{post.title}</p>
                    <ul className="category clearfix">
                        {
                            post.categories ?
                                (<li>
                                    <a href="#">{post.categories}</a>
                                </li>) : null
                        }
                    </ul>
                </div>
                <div className="middle">
                    <p>{post.content}</p>
                </div>
                <div className="bottom">
                    <a className="btn-square-small" href="#">More</a>
                </div>
            </div>
        );
    }

    render() {
        console.log(this.props.posts)
        return (
            <section className="section-feature">
                <div className="row">
                    {
                        this.props.posts.map((post) => {
                            return this.makePostList(post)
                        })
                    }
                </div>
            </section>
        );
    }
}

function mapStateToProps({ posts }) {
    return { posts }
}


export default connect(mapStateToProps, { fetchPosts })(PostIndex);

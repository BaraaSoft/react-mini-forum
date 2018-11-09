import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import '../style/resources/css/post_new.css'
import { Link } from 'react-router-dom';
import { createPost } from '../actions/index'
import { connect } from 'react-redux';

class PostNew extends Component {
    constructor(props) {
        super(props)
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        let inputErrorClass = (touched && error) ? 'error-input' : '';
        return (
            <div className="form-group">
                <input className={inputErrorClass} {...field.input} type="text" id={field.id}
                    placeholder={field.title} />
                <label htmlFor={field.id}>{field.title}</label>
                <span className="error-text">{touched && error}</span>
            </div>
        );
    }

    renderContentField(field) {
        return (
            <div className="form-group">
                <textarea {...field.input} rows="8" placeholder="Enter Content"
                    id="textarea"></textarea>
                <label htmlFor="textarea">Enter Content</label>
                <span className="error-text">{field.meta.touched && field.meta.error}</span>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, (post) => {
            this.props.history.push('/');
            console.log(post);
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="form-layout row">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="title" title="title" id="input-id" component={this.renderField} />
                    <Field name="categories" title="categories" id="input-cat" component={this.renderField} />
                    <Field name="content" component={this.renderContentField} />
                    <button type='submit' className="btn-squre-full">Save</button>
                    <Link to="/" className="btn-squre-full">Cancel</Link>
                </form>
            </div>

        );
    }
}

function validate(value) {
    let error = {}
    if (!value.title) {
        error.title = "*Please enter title!"
    }
    if (!value.categories) {
        error.categories = "*Missing Category!"
    }
    if (!value.content) {
        error.content = "*No content!"
    }
    return error;
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(
    connect(null, { createPost })(PostNew)
)

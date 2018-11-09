import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

/**** wiring up redux ****/
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import ReduxPromise from 'redux-promise';
/* React Router */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//style
import './style/vendors/css/grid.css'
import './style/vendors/css/ionicons.min.css'
import './style/vendors/css/normalize.css'
import './style/resources/css/style.css'
//other
import PostIndex from './containers/post_index';
import PostNew from './containers/post_new';
import Header from './containers/post_header'
import PostShow from './containers/post_show';



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/posts/new" component={PostNew} />
                    <Route path="/posts/:id" component={PostShow} />
                    <Route path="/" component={PostIndex} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// <link rel="stylesheet" type="text/css" href="vendors/css/grid.css">
//     <link rel="stylesheet" type="text/css" href="vendors/css/normalize.css">
//         <link rel="stylesheet" type="text/css" href="vendors/css/ionicons.min.css">
//             <link rel="stylesheet" type="text/css" href="resources/css/style.css">

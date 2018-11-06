import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**** wiring up redux ****/
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import ReduxPromise from 'redux-promise';
/* React Router */
import { BrowserRouter, Route } from 'react-router-dom';

class Hello extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<h2>Hello!</h2>);
    }
}
class Goodbye extends React.Component {
    render() {
        return <h2>Goodbye ;)</h2>
    }
}

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/hello" component={Hello} />
                <Route path="/goodbye" component={Goodbye} />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

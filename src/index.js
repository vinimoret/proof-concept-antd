import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Layout } from 'antd';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Main from './components/Main';
import 'antd/dist/antd.css';

const routing = (
  <Router>
    <React.StrictMode>
      <Layout.Header className="header">
        <Link to="/main">
          <b style={{ color: 'white' }}>Project 3.0</b>
        </Link>
      </Layout.Header>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/main" component={Main} />
      </div>
    </React.StrictMode>
    ,
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

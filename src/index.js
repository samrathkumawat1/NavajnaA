import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

import LogInPage from './LogInPage';
import Admin from './Admin';
import CustomCard from './Card';
import App from './App';
import CustomChart from './Chart';

import SimpleTable from "./SimpleTable";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(
    <Router >
    <Switch>
    <Route exact path="/" component={Admin} />
    <Route path="/LogInPage" component={LogInPage} />
    
    
    </Switch>
  </Router>,
  document.getElementById('root')
);

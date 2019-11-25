import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//import Layout from './Layout';
import Login from './pages/Login';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

import { Context } from './Context'

const PrivateRoute = ({ isAuth, ...props }) =>
  isAuth
    ? <Route { ...props } />
    : <Redirect to="/login" />

export const App = () => {
    const { isAuth } = useContext(Context)
    return <BrowserRouter>
  
	        <Switch>
	        	<Route exact path="/login">
	        		<Login />
	        	</Route>
	        	
	        	<PrivateRoute exact isAuth={ isAuth } path="/">
	        		<Detail />
	        	</PrivateRoute>
	        	
	        	<Route path="*">
	        		<NotFound />
	        	</Route>
	          	
	          
	        </Switch>
      
    </BrowserRouter>
}

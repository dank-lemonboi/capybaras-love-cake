import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MyFirstRoute from './components/MyFirstRoute';
import SecondRoute from './components/SecondRoute';
import ThirdRoute from './components/ThirdRoute';


export default (
<Switch>
    <Route path='/' component={MyFirstRoute} exact/>
    <Route path='/second' component={SecondRoute} />
    <Route path='/third/:foodItem' component={ ThirdRoute }/>
    {/* <Route path='/third/:foodItem' render={ () => <ThirdRoute /> }/> */}
</Switch>
)
import React from 'react';
import {Link, Route} from 'react-router-dom';
import Sub1 from './Sub1';

export default function SecondRoute() {
    return (
        <div>
            <h1>My second Routes Content</h1>
            <Link to='/second/sub1'><span>Sub Route</span></Link>
            <Route path='/second/sub1' component={Sub1}/>
            {/* <Link t></Link>
            <Route /> */}
        </div>
    )
    }
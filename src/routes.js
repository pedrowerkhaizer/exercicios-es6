import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main.jsx';
import M1 from './pages/M1.jsx';
import M2 from './pages/M2.jsx';
import M3 from './pages/M3.jsx';
import Resex1_1 from './pages/Resex1_1.jsx';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/m1" component={M1} />
            <Route path="/m2" component={M2} />
            <Route path="/m3" component={M3} />
            <Route path="/resex1_1" component={Resex1_1} />
        </Switch>
    );
}

export default Routes;
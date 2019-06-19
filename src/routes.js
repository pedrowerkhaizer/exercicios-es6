import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main.jsx';
import M1 from './pages/M1.jsx';
import M2 from './pages/M2.jsx';
import M3 from './pages/M3.jsx';
import Resex1_1 from './pages/Resex1_1.jsx';
import Resex1_2 from './pages/Resex1_2.jsx';
import Resex1_3 from './pages/Resex1_3.jsx';
import Resex1_4 from './pages/Resex1_4.jsx';
import Resex1_5 from './pages/Resex1_5.jsx';
import Resex1_6 from './pages/Resex1_6.jsx';
import Resex1_7 from './pages/Resex1_7.jsx';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/m1" component={M1} />
            <Route path="/m2" component={M2} />
            <Route path="/m3" component={M3} />
            <Route path="/resex1_1" component={Resex1_1} />
            <Route path="/resex1_2" component={Resex1_2} />
            <Route path="/resex1_3" component={Resex1_3} />
            <Route path="/resex1_4" component={Resex1_4} />
            <Route path="/resex1_5" component={Resex1_5} />
            <Route path="/resex1_6" component={Resex1_6} />
            <Route path="/resex1_7" component={Resex1_7} />
        </Switch>
    );
}

export default Routes;
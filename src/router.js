import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Roster from './components/Roster';
import Schedule from './components/Schedule';
import TeamA from './components/TeamA';
import TeamB from './components/TeamB';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/roster' render={()=>{
            return(
                <Roster>
                    <Switch>
                    <Route path='/roster/teama' component={TeamA} />
                    <Route path='/roster/teamb' component={TeamB} />
                    </Switch>
                </Roster>
            )
        }}/>
        <Route path='/schedule' component={Schedule} />
    </Switch>
)
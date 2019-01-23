import React from 'react'
import {Route, Switch} from "react-router";
import ReportViolation from "../violation/ReportViolation";
import Home from "../home/Home";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/report-violation' component={ReportViolation}/>
        </Switch>
    </main>
)

export default Main
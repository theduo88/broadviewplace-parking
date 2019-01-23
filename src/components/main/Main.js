import React from 'react'
import {Route, Switch} from "react-router";
import ReportViolation from "../violation/ReportViolation";
import Home from "../home/Home";
import {ViolationLog} from "../violation/ViolationLog";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/report-violation' component={ReportViolation}/>
            <Route path='/violation-log' component={ViolationLog}/>
        </Switch>
    </main>
)

export default Main
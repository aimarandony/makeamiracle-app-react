import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Home from '../pages/Home'
import Scholarship from '../pages/Scholarship'

const DashboardRoutes = () => {
    return (
        <Dashboard>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/proccess/scholarship" component={Scholarship} />
                <Redirect to="/home" />
            </Switch>
        </Dashboard>
    )
}

export default DashboardRoutes

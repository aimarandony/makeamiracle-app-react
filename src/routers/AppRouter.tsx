import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import Login from '../pages/Login'
import DashboardRoutes from './DashboardRoutes'

const AppRouter = () => {

    const { authenticated } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <Switch>
                {
                    authenticated ? <DashboardRoutes /> : <>
                        <Route exact path="/login" component={Login} />
                        <Redirect to="/login" />
                    </>
                }
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter

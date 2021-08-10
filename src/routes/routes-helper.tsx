import React from 'react'
import { Route } from 'react-router-dom'

const RouteWithSubRoutes = route => {
    const { path, exact, routes } = route
    return (
        <Route path={path} exact={exact || false}>
            <route.component routes={routes} />
        </Route>
    )
}

export default RouteWithSubRoutes

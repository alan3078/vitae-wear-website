import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { AuthProvider } from './auth/auth-provider'
import './App.scss'
import MainHeader from './components/main-header/main-header'
import MainFooter from './components/main-footer/main-footer'

import mainRoute from './routes/routes-config'
import RouteWithSubRoutes from './routes/routes-helper'

const App: React.FC<{}> = () => (
    <AuthProvider>
        <Router>
            <MainHeader />
            <div className="page-container">
                {mainRoute.map(route => (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <RouteWithSubRoutes key={route.path} {...route} />
                ))}
            </div>
            <MainFooter />
        </Router>
    </AuthProvider>
)

export default App

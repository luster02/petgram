import React, { Fragment } from 'react'
import { Router } from '@reach/router'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { Favs } from '../pages/Favs'
import { User } from '../pages/User'
import { NotRegisteredUser } from '../pages/NotRegisteredUser'
import { useAuth } from '../context/AuthContext'

export const Navigation = () => {
    const { isAuth } = useAuth()

    return (
        <Fragment>
            <Router>
                <Home path="/" />
                <Home path="/pet/:id" />
                <Detail path="/detail/:id" />
            </Router>
            {isAuth
                ? <Router>
                    <Favs path='/favs' />
                    <User path='/user' />
                </Router>
                : <Router>
                    <NotRegisteredUser path='/favs' />
                    <NotRegisteredUser path='/user' />
                </Router>
            }
        </Fragment>
    )
}
import React, { Fragment } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const Main = ({ children }) => {

    return (
        <Fragment>
            <Header />
            <Outlet/>
            <Footer />
        </Fragment>
    )
}

export default Main

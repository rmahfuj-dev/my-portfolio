import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
const Root = () => {
    return (
        <div>
            <Navbar />
            <main className='min-h-screen'>
                <Outlet />
            </main>

        </div>
    )
}

export default Root
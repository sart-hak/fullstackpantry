import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPage from '../components/admin/AdminPage'
import Login from '../components/admin/Login'

const Admin = () => {

    const [user, setLoginUser] = useState({})

    return (
        <div>

            <Routes>
            <Route path="/*" element ={
                user && user._id ? <AdminPage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
            }
            />
            <Route path="/getcontact" element ="hello" />
            </Routes>
        </div>
    )
}

export default Admin
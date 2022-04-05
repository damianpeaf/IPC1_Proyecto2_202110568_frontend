import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from '../components/Navbar'
import CreateUser from '../components/CreateUser'
import UserScreen from '../components/UserScreen';
import SearchUser from '../components/SearchUser';
import UpdateUser from '../components/UpdateUser';

export const AppRouter = () => {
    return (
        <BrowserRouter className="App">
            <Navbar />
            <div className="flex items-center min-h-screen  justify-center">
                <Routes>
                    <Route path="/" element={<UserScreen />} />
                    <Route path="/user" element={<UserScreen />} />
                    <Route path="/createuser" element={<CreateUser />} />
                    <Route path="/searchuser" element={<SearchUser />} />
                    <Route path="/updateuser" element={<UpdateUser />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

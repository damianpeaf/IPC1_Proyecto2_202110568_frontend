import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from '../components/Navbar'
import CreateUser from '../components/CreateUser'
import UserScreen from '../components/UserScreen';
import SearchUser from '../components/SearchUser';
import BookScreen from '../components/BookScreen';
import CreateBook from '../components/bookComponents/CreateBook';
import UpdateBook from '../components/bookComponents/UpdateBook';

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
                    <Route path="/book" element={<BookScreen />} />
                    <Route path="/createbook" element={<CreateBook />} />
                    <Route path="/searchbook" element={<UpdateBook />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

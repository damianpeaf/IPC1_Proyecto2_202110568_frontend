import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from '../components/Navbar'
import CreateUser from '../components/CreateUser'
import UserScreen from '../components/UserScreen';
import SearchUser from '../components/SearchUser';
import BookScreen from '../components/BookScreen';
import CreateBook from '../components/bookComponents/CreateBook';
import UpdateBook from '../components/bookComponents/UpdateBook';
import BorrowScreen from '../components/BorrowScreen';
import CreateBorrow from '../components/borrowComponents/CreateBorrow';
import SearchBorrow from '../components/borrowComponents/SearchBorrow';
import ReportScreen from '../components/ReportScreen'


export const AppRouter = () => {
    return (
        <BrowserRouter className="App">
            <Navbar />
            <div className="flex items-center min-h-screen  justify-center mx-1">
                <Routes>
                    <Route path="/" element={<UserScreen />} />
                    <Route path="/user" element={<UserScreen />} />
                    <Route path="/createuser" element={<CreateUser />} />
                    <Route path="/searchuser" element={<SearchUser />} />
                    <Route path="/book" element={<BookScreen />} />
                    <Route path="/createbook" element={<CreateBook />} />
                    <Route path="/searchbook" element={<UpdateBook />} />
                    <Route path="/borrowscreen" element={<BorrowScreen />} />
                    <Route path="/createborrow" element={<CreateBorrow />} />
                    <Route path="/returnborrow" element={<SearchBorrow type='return' />} />
                    <Route path="/searchborrow" element={<SearchBorrow />} />
                    <Route path="/reportscreen" element={<ReportScreen />} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}

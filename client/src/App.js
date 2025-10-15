import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from './api/axios';

import Header from './components/Header';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import ChatPage from './components/ChatPage';
import JobSearchPage from './components/JobSearchPage';

const App = () => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        axios.get('/api/current_user').then(res => setAuth(res.data || false));
    }, []);

    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header auth={auth} />
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/surveys" element={<Dashboard />} />
                        <Route path="/chat" element={<ChatPage />} />
                        <Route path="/jobs" element={<JobSearchPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;

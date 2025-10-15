import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Welcome to your Arise Dashboard</h2>
            <p style={{ textAlign: 'center' }}>From here, you can access all the tools to help you in your tech career journey.</p>
            <div className="row" style={{ marginTop: '40px' }}>
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">AI Doubt Solver</span>
                            <p>Have a question about programming, data structures, or career paths? Get instant answers from our AI tutor.</p>
                        </div>
                        <div className="card-action">
                            <Link to="/chat">Go to AI Solver</Link>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Job Search Aggregator</span>
                            <p>Find the latest job openings for any role, aggregated from the top job boards on the web.</p>
                        </div>
                        <div className="card-action">
                            <Link to="/jobs">Go to Job Search</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
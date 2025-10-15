import React from 'react';

const Header = ({ auth }) => {
    const renderContent = () => {
        switch (auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return [
                    <li key="1"><a href="/jobs">Find Jobs</a></li>,
                    <li key="2"><a href="/chat">AI Solver</a></li>,
                    <li key="3"><a href="/api/logout">Logout</a></li>
                ];
        }
    };

    return (
        <nav>
            <div className="nav-wrapper">
                <a href={auth ? '/surveys' : '/'} className="left brand-logo">
                    Arise
                </a>
                <ul className="right">
                    {renderContent()}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
import React, { useState } from 'react';
import axios from '../api/axios';

const JobSearchPage = () => {
    const [role, setRole] = useState('');
    const [links, setLinks] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!role.trim()) return;

        setIsLoading(true);
        setLinks(null);

        try {
            const res = await axios.get(`/api/jobs/search?role=${role}`);
            setLinks(res.data);
        } catch (error) {
            console.error('Error fetching job links:', error);
            setLinks(null);
        }
        setIsLoading(false);
    };

    return (
        <div>
            <h2>Job Search Aggregator</h2>
            <p>Enter a job role to find recent listings on popular platforms.</p>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g., Frontend Developer"
                    style={{ width: '80%', marginRight: '10px' }}
                    disabled={isLoading}
                />
                <button type="submit" className="btn" disabled={isLoading}>Search</button>
            </form>

            {isLoading && <p style={{ marginTop: '20px' }}>Searching for jobs...</p>}

            {links && !isLoading && (
                <div style={{ marginTop: '20px' }}>
                    <h4>Search Results for "{role}"</h4>
                    <p><a href={links.linkedin} target="_blank" rel="noopener noreferrer">View jobs on LinkedIn</a></p>
                    <p><a href={links.indeed} target="_blank" rel="noopener noreferrer">View jobs on Indeed</a></p>
                    <p><a href={links.glassdoor} target="_blank" rel="noopener noreferrer">View jobs on Glassdoor</a></p>
                </div>
            )}
        </div>
    );
};

export default JobSearchPage;
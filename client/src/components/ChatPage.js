import React, { useState } from 'react';
import axios from '../api/axios';

const ChatPage = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);
        setInput('');

        try {
            const res = await axios.post('/api/chat', { message: input });
            const aiMessage = { role: 'assistant', content: res.data.response };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error fetching AI response:', error);
            const errorMessage = { role: 'assistant', content: 'Sorry, I ran into an error. Please try again.' };
            setMessages(prev => [...prev, errorMessage]);
        }
        setIsLoading(false);
    };

    return (
        <div>
            <h2>Arise AI Doubt Solver</h2>
            <div className="chat-box" style={{ height: '400px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.role}`}>
                        <strong>{msg.role === 'user' ? 'You' : 'Arise AI'}:</strong> {msg.content}
                    </div>
                ))}
                {isLoading && <div className="message assistant"><strong>Arise AI:</strong> Thinking...</div>}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question about tech or your career..."
                    style={{ width: '80%', marginRight: '10px' }}
                    disabled={isLoading}
                />
                <button type="submit" className="btn" disabled={isLoading}>Send</button>
            </form>
        </div>
    );
};

export default ChatPage;
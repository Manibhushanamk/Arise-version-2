const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
const keys = require('../config/keys');

const openai = new OpenAI({
    apiKey: keys.openAIKey,
});

router.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: "You are 'Arise AI', an expert tutor and career counselor for students in the tech field. You must only answer questions related to programming, technology, software development, and career advice. Your tone should be encouraging, clear, and helpful. If the user asks about a non-tech topic, politely decline and guide them back to relevant subjects."
                },
                {
                    role: 'user',
                    content: message
                }
            ],
            model: 'gpt-3.5-turbo',
        });

        res.send({ response: completion.choices[0].message.content });
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).send({ error: 'Failed to get response from AI' });
    }
});

module.exports = router;
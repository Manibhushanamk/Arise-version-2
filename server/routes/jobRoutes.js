const express = require('express');
const router = express.Router();

router.get('/api/jobs/search', (req, res) => {
    const { role } = req.query;
    if (!role) {
        return res.status(400).send({ error: 'A job role is required.' });
    }

    const encodedRole = encodeURIComponent(role);

    const searchLinks = {
        linkedin: `https://www.linkedin.com/jobs/search/?keywords=${encodedRole}&f_TPR=r604800`,
        indeed: `https://www.indeed.com/jobs?q=${encodedRole}&fromage=7`,
        glassdoor: `https://www.glassdoor.com/Job/jobs.htm?sc.keyword=${encodedRole}&fromAge=7`
    };

    res.send(searchLinks);
});

module.exports = router;
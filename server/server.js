// server side 
const axios = require('axios');

const SERVER_URL = 'http://magic.com';

module.exports = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const response = await axios.get(`${SERVER_URL}/get-token`, req.body);
            res.status(response.status).json(response.data); 
        } catch (error) {
            console.error('Error communicating with server:', error);
            res.status(error.response?.status || 500).json(error.response?.data || { error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
        

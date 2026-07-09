const express = require('express');
const cors = require('cors');
const { ANIME } = require('@consumet/core');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Consumet API is running',
        endpoints: {
            gogoanime: '/anime/gogoanime/:query',
            zoro: '/anime/zoro/:query',
            '9anime': '/anime/9anime/:query',
            animepahe: '/anime/animepahe/:query'
        }
    });
});

// Initialize providers
const gogoanime = new ANIME.Gogoanime();
const zoro = new ANIME.Zoro();
const nineanime = new ANIME.NineAnime();
const animepahe = new ANIME.AnimePahe();

// ===== GOGOANIME ROUTES =====
app.get('/anime/gogoanime/:query', async (req, res) => {
    try {
        const results = await gogoanime.search(req.params.query);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/anime/gogoanime/:id/episode/:episode', async (req, res) => {
    try {
        const { id, episode } = req.params;
        const sources = await gogoanime.fetchEpisodeSources(`${id}-episode-${episode}`);
        res.json(sources);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ===== ZORO ROUTES =====
app.get('/anime/zoro/:query', async (req, res) => {
    try {
        const results = await zoro.search(req.params.query);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/anime/zoro/:id/:episode', async (req, res) => {
    try {
        const { id, episode } = req.params;
        const sources = await zoro.fetchEpisodeSources(`${id}$episode$${episode}`);
        res.json(sources);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ===== 9ANIME ROUTES =====
app.get('/anime/9anime/:query', async (req, res) => {
    try {
        const results = await nineanime.search(req.params.query);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/anime/9anime/:id/:episode', async (req, res) => {
    try {
        const { id, episode } = req.params;
        const sources = await nineanime.fetchEpisodeSources(`${id}$episode$${episode}`);
        res.json(sources);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ===== ANIMEPAHE ROUTES =====
app.get('/anime/animepahe/:query', async (req, res) => {
    try {
        const results = await animepahe.search(req.params.query);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/anime/animepahe/:id/episode/:episode', async (req, res) => {
    try {
        const { id, episode } = req.params;
        const sources = await animepahe.fetchEpisodeSources(id, episode);
        res.json(sources);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Consumet API running on port ${PORT}`);
});
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.use(cors())
app.get('/', (req, res) => {
    res.send('dragon is running');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const findingNews = news.find(n => n._id === id)
    res.send(findingNews)
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(news)
    }
    else {

        const findingCategoryNews = news.filter(n => n.category_id === id)
        res.send(findingCategoryNews);
    }
})

app.listen(port, () => {
    console.log(`Dragon is api is running on port: ${port}`)
})
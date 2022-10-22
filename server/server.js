const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')
const uri =  'mongodb://127.0.0.1:27017'

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(express.json());

app.use(express.urlencoded({
    extended: false
}))

app.use(allowCrossDomain); //call back function

app.get('/api', async (req, res) => {
    MongoClient.connect(uri, (err, db) => {
        if (err) throw err
        const dbo = db.db('movie')
        dbo.collection('posts').find({}).toArray((err, result) => {
            if (err) throw err   
            res.json(result)
            db.close()
        })
    })
})

app.post('/del', (req, res) => {
    MongoClient.connect(uri, (err, db) => {
        if(err) throw err
        const dbo = db.db('movie')
        dbo.collection('posts').deleteOne(req.body, (err, obj) => {
            if(err) throw err
            console.log(req.body.title, ' document deleted');
            db.close()
        })
    })
})

app.post('/create', (req, res) => {
    MongoClient.connect(uri, (err, db) => {
        if(err) throw err
        const dbo = db.db('movie')
        dbo.collection('posts').insertOne({title: req.body.title, body: req.body.body}, (err, obj) => {
            if(err) throw err
            console.log(req.body.title, ' document created');
            const data = {bool : true}
            res.json(data)
            db.close()
        })
    })
})

const port = 8080
app.listen(port, () => console.log(`server listen ${port} ...`))

'use strict';

import express from 'express';
import redis from 'redis';
import {redisHost, redisPort} from './config'

// Constants
const PORT = 8081;

// App
const app = express();
const client = redis.createClient({
  host: redisHost,
  port: redisPort
});
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send(`number of visits iskhkh ${visits}`);
    client.set('visits', parseInt(visits) +1)
  })

});

app.listen(PORT, () => {
  console.log(`Running on port :${PORT}`);
});

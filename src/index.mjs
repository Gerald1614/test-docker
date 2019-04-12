'use strict';

import express from 'express';
import redis from 'redis';

// Constants
const PORT = 8081;

// App
const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send(`number of visits is ${visits}`);
    client.set('visits', parseInt(visits) +1)
  })

});

app.listen(PORT, () => {
  console.log(`Running on port :${PORT}`);
});

const { Client } = require('pg');

const client = new Client({
  connectionString: "postgres://iecjdrhweqepbv:d6377df5c0c1fa3307bddc10a24bf9c55eb2c0c0873979fa6de7004db0021863@ec2-52-4-111-46.compute-1.amazonaws.com:5432/d4hefimmgdvq5u",
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

module.exports = client;

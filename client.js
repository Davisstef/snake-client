const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('Success!');
    conn.write('Name: RAS');
  });

  conn.on('data', (data) => {
    console.log('PSA FROM MR T. FOOL', data);
  });

  return conn;
};

module.exports = { connect };
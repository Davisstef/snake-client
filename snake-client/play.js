#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')

const game = new Game(new UserInterface(), new RemoteInterface() )

game.start()

const net = require("net")
const connect = function () {
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

console.log("Connecting ...");
connect();

#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')

const game = new Game(new UserInterface(), new RemoteInterface() )

game.start()

const net = require("net")

console.log("Connecting ...");
connect();

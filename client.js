const net = require('net');
/**
 * Establishes connection with the game server
 */
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  // When you idle, print out the console log
  // conn.on = while you are connected
  conn.on('data', () => {
    console.log("you ded cuz you idled");
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MAT");
  });

  return conn;
};

module.exports = { connect };


// 172.46.3.20
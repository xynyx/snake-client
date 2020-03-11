const net = require('net');

const conn = net.createConnection({ 
  host: '172.46.3.109', // change to IP address
  port: 3000
});

conn.setEncoding('utf8'); // interpret data as text

// client.js
conn.on('data', (data) => {
  console.log('Server says: ', data);
});

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
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
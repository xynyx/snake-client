let connection;
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  // in play.js --> setupInput(connect());
  // thus conn becomes connection
  // Connection becomes the entire connect() function in client.js
  connection = conn;  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // While stdin is some sort of data, pass handleUserInput, which detects if the data is ctrl+c, and if it is, quit the program
  stdin.on('data', (handleUserInput));
  return stdin;
}

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
    // Must write to the server by calling connection (which again, is the connect() function in client.js)
  } else if (key === "w") connection.write("Move: up")
  else if (key === "a") connection.write("Move: left")
  else if (key === "s") connection.write("Move: down")
  else if (key === "d") connection.write("Move: right")
  else if (key === "t") connection.write("Say: You ssssuck!")
  else if (key === "g") connection.write("Say: U eating snek poo")
}

module.exports = { setupInput };

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
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
  }
}

module.exports = { setupInput };
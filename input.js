
let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    console.log(`Bye, snake!`);
    process.exit();
  } else if (data === "w") {
    
    connection.write(`Move: up`);
  } else if (data === "a") {
    connection.write(`Move: left`);
  } else if (data === "s") {
    connection.write(`Move: down`);
  } else if (data === "d") {
    connection.write(`Move: right`);
  } else {
    connection.write('Say: ssss');

  }
};



module.exports = {
  setupInput
};
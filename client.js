const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: PORT,// IP address here,
    port: IP // PORT number here,

    
  });
 
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log(`Successfully connected to game server`);
  });

  conn.on('data', (data) => {
    console.log(`server returned:`, data);
  });

  conn.write('Name: NCM');
  return conn;
};






module.exports = {
  connect
};
// smtp.js
const {SMTPServer} = require('smtp-server');

const server = new SMTPServer({
    // disable STARTTLS to allow authentication in clear text mode
    disabledCommands: ['STARTTLS', 'AUTH'],
    logger: true,
    onData(stream, session, callback){
        stream.pipe(process.stdout); // print message to console
        stream.on('end', callback);
    },
});

server.listen(25);

//added by me
process.on('SIGINT', function() {
    server.close(function () {
      console.log('SMTP closed');
      process.exit(0);
    });
  });
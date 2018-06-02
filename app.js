const app = require('./config/server');

const server = app.listen(3000, () => {
  console.log('server runing');
});
const io = require('socket.io').listen(server);

app.set('io', io);
io.on('connection', (socket) => {
  socket.on('disconnect', () => {
  });

  socket.on('msgServer', (data) => {
    socket.emit('msgChat', { nickname: data.nick, msg: data.msg });
    socket.broadcast.emit('msgChat', { nickname: data.nick, msg: data.msg });
    if (parseInt(data.update, 0) === 0) {
      socket.emit('peopleChat', { nickname: data.nick });
      socket.broadcast.emit('peopleChat', { nickname: data.nick });
    }
  });
});

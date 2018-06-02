module.exports = (app) => {
  app.post('/chat', (req, res) => {
    app.app.controllers.chatController.chat(app, req, res);
  });

  app.get('/chat', (req, res) => {
    app.app.controllers.chatController.chat(app, req, res);
  });
};

module.exports = (app) => {
  app.get('/', (req, res) => {
    app.app.controllers.indexController.index(app, req, res);
  });
};

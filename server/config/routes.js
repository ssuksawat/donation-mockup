module.exports = (app, config) => {
  // redirect all GET traffic to index.html
  app.get('*', (req, res) => {
    res.sendFile(`${config.rootPath}/public/index.html`);
  });
};

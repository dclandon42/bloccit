moduel.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    app.use(staticRoutes);
  }
}

const GenericController = require('../Controllers/GenericController');

module.exports = (app) => {
    app.get('/dados', GenericController.get);
    app.get('/dado/:id', GenericController.getById);
    app.get('/dado', GenericController.getByAnoAndGenero);
    app.post('/', GenericController.findByObject);
}
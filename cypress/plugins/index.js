require('@shelex/cypress-allure-plugin');

module.exports = (on, config) => {
    on('file:preprocessor', webpackPreprocessor);
    allureWriter(on, config);
    return config;
};
const path = require('path');

const pageNotFoundError = (req, res) => {
  res
    .status(404)
    .sendFile(
      path.join(__dirname, '..', '..', 'public', 'html', '404.html'),
      (err) => {
        if (err) {
          res.sendFile(
            path.join(__dirname, '..', '..', 'public', 'html', '500.html'),
          );
        }
      },
    );
};

// eslint-disable-next-line no-unused-vars
const serverError = (error, req, res, next) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, '..', '..', 'public', 'html', '500.html'));
};
module.exports = {
  pageNotFoundError,
  serverError,
};

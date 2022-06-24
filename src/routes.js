const {
  addBookHandler,
  getAllBooksHandler,
  getBookDetailById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },

  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookDetailById,
  },
];

module.exports = routes;

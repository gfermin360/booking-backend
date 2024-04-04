const { getAll, create, remove, update } = require('../controllers/review.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const reviewRouter = express.Router();

reviewRouter.route('/reviews')
    .get(getAll)
    .post(verifyJWT, create);

reviewRouter.route('/reviews/:id')
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = reviewRouter;
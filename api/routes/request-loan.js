'use strict'

var express = require('express');
var loanReqController = require('../controllers/request-loan');

var api = express.Router();

api.post('/loan-request', loanReqController.register);
api.post('/delete-request', loanReqController.remove);
api.get('/get-request-user', loanReqController.getReqPerUser);
api.get('/get-req-user/:id', loanReqController.getReqUser);

module.exports = api;
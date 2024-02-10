// Creates the partner router and export it, similar to partnerRouter.js
const express = require('express');
const partnerRouter = express.Router();

// Implements the /partners/:partnerId routes

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you.');
})
.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}.`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners.');
})
.delete((req, res) => {
    res.end('Deleting all partners.');
});

// TIP: Quickly change words using Ctrl+F > left downward arrow > Replace word
partnerRouter.route('/:partnerId')
.get((req, res) => {
    res.end(`We will return one partner with ID: ${req.params.partnerId}.`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported at /partners/${req.params.partnerId}.`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`Will update partner with ID:${req.params.partnerId} Data:${req.body}.`);
})
.delete((req, res) => {
    res.end(`Deleting partner with ID: ${req.params.partnerId}.`);
});

module.exports = partnerRouter;

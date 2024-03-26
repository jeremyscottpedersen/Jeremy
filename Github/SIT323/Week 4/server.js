const express = require('express');
const logger = require('./logger'); // Import the logger

const app = express();
const port = 3000;

app.use(express.json());

// Log all requests
app.use((req, res, next) => {
    logger.info(`${req.method} request to ${req.url}`);
    next();
});

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Calculator Microservice!');
    logger.info('Responded to GET request on /');
});

// Addition endpoint
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        logger.error('Invalid input types');
        return res.status(400).send('Inputs must be numbers');
    }
    const result = num1 + num2;
    res.send({ result });
    logger.info(`Performed addition: ${num1} + ${num2} = ${result}`);
});

// Subtraction endpoint
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        logger.error('Invalid input types');
        return res.status(400).send('Inputs must be numbers');
    }
    const result = num1 - num2;
    res.send({ result });
    logger.info(`Performed subtraction: ${num1} - ${num2} = ${result}`);
});

// Multiplication endpoint
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        logger.error('Invalid input types');
        return res.status(400).send('Inputs must be numbers');
    }
    const result = num1 * num2;
    res.send({ result });
    logger.info(`Performed multiplication: ${num1} * ${num2} = ${result}`);
});

// Division endpoint
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        logger.error('Invalid input types');
        return res.status(400).send('Inputs must be numbers');
    }
    if (num2 === 0) {
        logger.error('Attempted division by zero');
        return res.status(400).send('Division by zero is not allowed');
    }
    const result = num1 / num2;
    res.send({ result });
    logger.info(`Performed division: ${num1} / ${num2} = ${result}`);
});

// Start the server
app.listen(port, () => {
    logger.info(`Calculator microservice listening at http://localhost:${port}`);
});



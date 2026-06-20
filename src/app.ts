// Configures the setting for the express app object

import express, { Express } from 'express';
import { userRouter } from './routers/user.router.js';
import { errorHandler } from './middlewares/error-handler.js';
import { ApiError } from './utils/api-error.js';

const app: Express = express();

app.use(express.json()); // this will help express to deserialize the request body (JSON) into a JavaScript object
app.use(express.text());
app.use(express.urlencoded());

// Custom routes
app.get('/health', (_req, res) => {
    console.log("Executed health route");
    res.json({
        status: 'ok!',
        timestamp: new Date().toISOString()
    })

});


// Express router based routes
app.use('/api/users', userRouter); // if the route starts with /users, userRouter will handle it


// at the last we mention our error handling middleware
app.use(errorHandler);
export { app };
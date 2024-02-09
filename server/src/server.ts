import express, { Express, Request, Response, NextFunction,} from 'express';
import 'dotenv/config'
import cookieParser from 'cookie-parser';
import cors from 'cors';

const PORT = process.env.PORT || 8080;
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors(
  {origin: '*'}
)); // **** currently allows all origins - needs to be updated for frontend

// Router so all requests go to /api
const apiRouter = express.Router();
app.use('/api', apiRouter);

// Test route
apiRouter.get('/test', (req: Request, res: Response) => {
  res.json({'message': 'Hello World'});
});


// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from "./src/router";
import cors from 'cors';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', express.static('ui/build'));
app.get('/api', routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
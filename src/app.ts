import express, { Express } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from "./router";
import cors from 'cors';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('ui/build'));
app.use('/api', routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
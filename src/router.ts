import { NextFunction, Request, Response, Router } from 'express';
import { BigQuery } from "@google-cloud/bigquery";
import dotenv from 'dotenv';

const routes = Router();
dotenv.config();

const bigquery = new BigQuery({
    keyFilename: process.env.KEY_FILE
})

routes.get('/all', async (req: Request, res: Response, next: NextFunction) => {

    const sqlQuery: string = req.query.limit ? `SELECT * FROM \`cpme-255-sjsu.boston_crime.incident\` LIMIT ${req.query.limit}` : `SELECT * FROM \`cpme-255-sjsu.boston_crime.incident\``;

    const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'US',
    };

    setTimeout(() => {
        bigquery.query(options).then((data) => {
            const [row] = data;
            res.send(row);
        }).catch((e) => {
            console.log("Error: "+e);
            res.send({
                status: 'error',
                body: e
            })
        });
    }, 5000)
});

routes.get('/district', async (req: Request, res: Response, next: NextFunction) => {

    const sqlQuery: string = `SELECT 
    DISTRICT,
    COUNT(DISTRICT) as COUNT
    FROM \`cpme-255-sjsu.boston_crime.incident\` 
    WHERE DISTRICT IS NOT NULL GROUP BY DISTRICT`
    
    const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'US',
    };

    setTimeout(() => {
        bigquery.query(options).then((data) => {
            const [row] = data;

            let d: string[][] = [
                ["DISTRICT", "COUNT"]
            ]

            row.forEach((value) => {
                d.push([value.DISTRICT, value.COUNT]);
            })
            res.send(d)
        }).catch((e) => {
            console.log("Error: "+e);
            res.send({
                status: 'error',
                body: e
            })
        });
    }, 1000)
});

routes.get('/year', async (req: Request, res: Response, next: NextFunction) => {

    const sqlQuery: string = `SELECT 
    years,
    count
    FROM \`cpme-255-sjsu.boston_crime.year_count\``;
    const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'US',
    };

    setTimeout(() => {
        bigquery.query(options).then((data) => {
            const [row] = data;

            let d: string[][] = [
                ["Year", "Count"]
            ]

            row.forEach((value) => {
                d.push([String(value.years), value.count]);
            })
            res.send(d)
        }).catch((e) => {
            console.log("Error: "+e);
            res.send({
                status: 'error',
                body: e
            })
        });
    }, 1000)
});

export default routes;
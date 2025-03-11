import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(express.json());

const PORT: string | number = process.env.PORT || 3001;

//routes
app.get('/hi', (req: Request, res: Response) => {
    res.send('Hola bebe');
})

app.listen(PORT, () => {
    console.log('Listen application in PORT: ', PORT);
})
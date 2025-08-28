import express from 'express';
const app = express();
app.get("/html", (req,res)=> {
    res.send("<h1>teste</h1><p>paragrafo</>");
});
app.listen(3000, () =>
    console.log('Servidor rodando em http://localhost:3000')
);
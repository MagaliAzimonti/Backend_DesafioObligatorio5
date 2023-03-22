import express from "express";
import handlebars from "express-handlebars";
import { Server } from "socket.io";

let app =  express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3031;

const httpServer = app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
const io = new Server(httpServer)

/* app.engine('hbs', hbs.engine())
app.set('views', "views");
app.set('view engine', 'hbs'); */

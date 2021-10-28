require("dotenv").config()
const categoryRouter = require("./src/resources/categories/router")
const dealRouter = require("./src/resources/deals/router")
const cafeRouter = require("./src/resources/cafes/router")
const usersRouter = require("./src/resources/users/router")
const authRouter = require("./src/resources/auth/router")
const loginAuth = require("./src/resources/middlewares/loginAuth")

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
var cookieParser = require('cookie-parser')


const app = express()

/* SETUP MIDDLEWARE */

app.disable("x-powered-by")

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use(cookieParser())


/* SETUP ROUTES */

app.use(authRouter)

app.use("/user", usersRouter)
app.use("/categories", categoryRouter);
app.use("/deals", dealRouter);

// app.use(loginAuth)

app.use("/cafe", cafeRouter);

app.get("*", (req, res) => {
    res.json({ ok: true })
})

/* START SERVER */

const port = process.env.PORT || 3030

app.listen(port, () => {
    console.log(`\n🚀 Server is running on http://localhost:${port}/\n`)
})
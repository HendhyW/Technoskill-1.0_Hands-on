const express = require('express');
const app = express();


const {pool} = require ('./config/db.config');
const employeeRoute = require ('./route/employee.route');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/employee',employeeRoute);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

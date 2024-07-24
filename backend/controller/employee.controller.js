const {pool} = require('../config/db.config');


async function addEmployee(req, res) {
    const { id, name, division, date_joined } = req.body;
    try {
    const result = await pool.query(
        "INSERT INTO EMPLOYEE (id, name, division, date_joined) VALUES ($1, $2, $3, $4) RETURNING *", 
        [id, name, division, date_joined]
    );
    return res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}


async function getEmployee(req, res) {
    try {
        const result = await pool.query("SELECT * FROM EMPLOYEE");
        return res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}


module.exports = {
    addEmployee,
    getEmployee
};

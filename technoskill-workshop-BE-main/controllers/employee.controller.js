const pg = require("../utils/connect");

exports.addEmployee = async function addEmployee(req, res) {
  // Insert kode ADD di sini
  try {
    const { name, division, salary } = req.body;
    const response = await pg.query('INSERT INTO employee (name, division, salary) VALUES ($1, $2, $3) RETURNING *', [name, division, salary]);

    res.status(201).json(response.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.getEmployee = async function getEmployee(req, res) {
  // Insert kode GET di sini
  try {
    const response = await pg.query('SELECT * FROM employee');
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.removeEmployee = async function removeEmployee(req, res) {
  // Insert kode GET di sini
  try {
    const { id } = req.body;
    
    const response = await pg.query('DELETE FROM employee WHERE id = $1', [id]);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

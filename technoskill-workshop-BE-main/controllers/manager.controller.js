const pg = require("../utils/connect");

exports.get = async function getManager(req, res) {
  try {
  const { name, password } = req.body;
  const response = await pg.query('SELECT * FROM manager');

  res.status(200).json(response.rows);
  } catch (error) {
  res.status(500).json(error);
  }
}  

exports.register = async function addManager(req, res) {
  // Insert kode REGISTER di sini 
  try {
    const {name, password} = req.body;

    const input = await pg.query(
      "INSERT INTO manager (name, password) VALUES ($1, $2) RETURNING *", [name, password]
    );

    return res.status(201).json(input.rows);
  } catch(error){
    console.log(error);
    return res.status(500).json(error);
  }
};

exports.login = async function loginManager(req, res) {
  // Insert kode LOGIN di sini 
  try {
    const { name, password } = req.body;
    const response = await pg.query('SELECT * FROM manager WHERE name = $1 AND password = $2', [name, password]);

    // Bila tidak cocok
    //if (!response) {
    //  res.status(401).json(error);
    //}
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

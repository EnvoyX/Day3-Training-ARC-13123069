const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require(`body-parser`);
const db = require("./connection");
const response = require("./response");
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  response(200, "API Express.js ready to run", "SUCCESS!", res);
});
app.get("/data", (req, res) => {
  res.status(200).json("this is json stuff");
});
app.get("/mahasiswa", (req, res) => {
  const sql = "SELECT * FROM mahasiswa";
  db.query(sql, (err, fields) => {
    if (err) throw err;
    console.log(fields);
    response(200, "get mahasiswa list", fields, res);
  });
});
// app.get("/mahasiswa/:id", (req, res) => {
//   const id = req.params.id;
//   res.send(`specific student with id: ${id}`);
// });
app.get("/mahasiswa/:nim", (req, res) => {
  const nim = req.params.nim;
  const sql = `SELECT * FROM mahasiswa WHERE nim = ${nim}`;
  db.query(sql, (err, fields) => {
    if (err) throw err;
    console.log(fields);
    response(200, `specific student with nim: ${nim}`, fields, res);
  });
});

app.post("/mahasiswa", (req, res) => {
  const { nim, nama, jurusan, universitas } = req.body;
  const sql = `INSERT INTO mahasiswa (nim, nama, jurusan, universitas) VALUES (${nim}, '${nama}', '${jurusan}', '${universitas}')`;
  db.query(sql, (err, fields) => {
    if (err) response(500, "error", "data invalid", res);
    if (fields?.affectedRows) {
      console.log(fields);
      const data = {
        isSuccess: fields.affectedRows,
        id: fields.insertId,
        body: req.body,
      };
      response(200, `Data added succesfully`, data, res);
      console.log("Data added successfully");
    } else {
      console.log("Data has failed to add");
    }
    console.log(fields);
  });
});

app.put("/mahasiswa", (req, res) => {
  const { nim, nama, jurusan, universitas } = req.body;
  const sql = `UPDATE mahasiswa SET nama = '${nama}' , jurusan = '${jurusan}', universitas = '${universitas}' WHERE nim = ${nim}`;
  db.query(sql, (err, fields) => {
    if (err) response(500, "error", "data invalid", res);
    if (fields?.affectedRows) {
      console.log(fields);
      const data = {
        isSuccess: fields.affectedRows,
        message: fields.message,
        body: req.body,
      };
      response(200, `Data updated successfully`, data, res);
    } else {
      response(500, "Error has occured", "No NIM matching", res);
    }
  });
});

app.delete("/mahasiswa", (req, res) => {
  const { nim } = req.body;
  const sql = `DELETE FROM mahasiswa WHERE nim = ${nim}`;
  db.query(sql, (err, fields) => {
    if (err) response(500, "error", "data invalid", res);
    console.log(fields);
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        targetDeleteNIM: nim,
      };
      response(200, `Deleted Data successfully`, data, res);
    } else {
      response(500, "Error has occured", "NIM not found", res);
    }
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

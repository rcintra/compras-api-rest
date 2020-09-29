const db = require("../config/dbconfig");

exports.getAll = (request, response) => {
  const query = "select * from dev.compras";
  db.query(query, (err, res) => {
    if (err) response.status(500).json(err);
    console.log(err);
    response.status(res.statusCode).json(res.data);
  });
};

exports.addCompra = (request, response) => {
  db.insert(
    {
      table: "compras",
      records: [
        {
          task: request.body.task,
          email: request.body.email,
          complete: request.body.complete,
        },
      ],
    },
    (err, res) => {
      if (err) response.status(500).json(err);
      response.status(res.statusCode).json(res.data);
    }
  );
};

exports.getByEmail = (request, response) => {
  db.searchByValue(
    {
      table: "compras",
      searchAttribute: "email",
      searchValue: request.body.email,
      attributes: ["*"],
    },
    (err, res) => {
      if (err) response.status(500).json(err);
      console.log(err);
      response.status(res.statusCode).json(res.data);
    }
  );
};

exports.deleteCompra = (request, response) => {
  db.delete(
    {
      table: "compras",
      hashValues: [request.body.id],
    },
    (err, res) => {
      if (err) response.status(500).json(err);
      response.status(res.statusCode).json(res);
    }
  );
};

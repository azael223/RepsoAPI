import mongoose from "mongoose";

const DBCONFIG = {
  type: "mongodb",
  host: "localhost",
  port: "27017",
  user: "repsoroot",
  password: "110211",
  database: "repso",
  config: {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

/* structure :  'mongodb://localhost:27017/myapp'
                'mongodb://username:password@host:port/database?options...'*/

  const URI =
    DBCONFIG.type +
    `://${DBCONFIG.user}:` +
    `${DBCONFIG.password}@` +
    `${DBCONFIG.host}:` +
    `${DBCONFIG.port}/` +
    `${DBCONFIG.database}`;

  const connection = mongoose.connect(URI, DBCONFIG.config)

export { connection };

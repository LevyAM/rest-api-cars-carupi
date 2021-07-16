import { connect } from "mongoose";

const uri =
  "mongodb+srv://carupi:L9JPpmTpFQwtkDOJ@mongo-db-api-cars-carup.mk9is.mongodb.net/db-carupi-cars?retryWrites=true&w=majority";

const Connection = () =>
  connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export { Connection };

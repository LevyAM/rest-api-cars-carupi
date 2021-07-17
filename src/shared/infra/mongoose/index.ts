import { connect } from "mongoose";

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@carupi-cars.zbvzl.mongodb.net/test?retryWrites=true&w=majority`;

const Connection = () => connect(uri);

export { Connection };

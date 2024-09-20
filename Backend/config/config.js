require("dotenv").config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : process.env.NODE_ENV === "development"
      ? ".env.development"
      : ".env.production",
});

const config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  ENV: process.env.NODE_ENV,
};

module.exports = config;

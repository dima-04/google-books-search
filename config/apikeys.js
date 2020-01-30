var dev_keys = require("./devKeys");

exports.apiKeys = {
  googleAPIKey: process.env.GOOGLE_API_KEY || dev_keys
};
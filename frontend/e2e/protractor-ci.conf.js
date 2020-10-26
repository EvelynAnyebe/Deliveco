const config = require("./protractor.conf").config;

config.capabilities = {
  browserName: "chrome",
  chromeOptions: {
    args: ["--headless", "--no-sandbox"],
  },
};

exports.config = config;

/*
ng test --no-watch --no-progress --browsers=ChromeHeadlessCI
ng e2e --protractor-config=e2e/protractor-ci.conf.js
*/

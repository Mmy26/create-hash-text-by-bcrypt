const bcrypt = require("bcrypt");
const PASSWORD = "PassW0rd";

(
  async function () {
    var salt = await bcrypt.genSalt(10, "b");
    var hash = await bcrypt.hash(PASSWORD, salt);
    console.log(hash);
  }
)();
const fs = require("fs");
const util = require("util");

class Write {
  constructor() {
    this.write = util.promisify(fs.writeFile);
  }

  async Write(filename, data) {
    try {
      await this.write(filename, data);
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = Write;

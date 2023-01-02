class Processor {
  static Process(data) {
    const dataProcess = data.split("\r\n");
    const rows = [];

    dataProcess.forEach((row) => {
      var arr = row.split(",");
      rows.push(arr);
    });
    return rows;
  }
}

module.exports = Processor;

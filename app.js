const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Write = require("./Write");
const PdfWriter = require("./PdfWrite");

const dataReader = new Reader();
const writer = new Write();

async function main() {
  const data = await dataReader.Read("./users.csv");
  const dataProcess = Processor.Process(data);
  const Users = new Table(dataProcess);
  const html = await HtmlParser.Parse(Users);

  writer.Write(`${Date.now()}.html`, html);
  PdfWriter.WritePDF(`${Date.now()}.PDF`, html);
}

main();

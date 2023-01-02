const pdf = require("html-pdf");

class PdfWrite {
  static WritePDF(filename, html) {
    pdf.create(html).toFile(filename, (err) => {});
  }
}

module.exports = PdfWrite;

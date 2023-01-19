const args = process.argv.slice(2);

const fetcher = (URL, location, callback) => {
  const request = require("request");
  request(URL, (error, response, body) => {
    callback(location, body);
    // Print the HTML for the Google homepage.
  });
};
const fileWriter = (location, texts) => {
  const fs = require("fs");

  fs.writeFile(location, texts, (err) => {
    if (err) {
      console.error(err);
    }
    byteCounter(texts.length, location);
  });
};
const byteCounter = (texts, location) => {
  console.log(`your file of ${texts} bytes has been saved to ${location}`);
};
fetcher(args[0], args[1], fileWriter);

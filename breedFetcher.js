const breed = process.argv[2]


const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breed


const request = require("request")

request(url, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (breed !== "American%20Bobtail" && (data[0].description === "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.")) {
    console.log("Ineligible breed")
  }
  else {
    console.log(data[0].description);
  }
});

